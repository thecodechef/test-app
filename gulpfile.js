'use strict';
var gulp = require('gulp');
var run = require('gulp-shell');
var config = require('./config.yml');
var pkg = require('./package.json');
var fse = require('fs-extra');
var moment = require('moment');
var path = require('path');
require('gulp-help');
var banner = {
    header: '/* \n' +
            '---\n'+
            'Project Name: '+pkg.name.toUpperCase()+'\n'+
            'Copyright: '+ moment(config.copyright).format('dddd, MMMM Do, YYYY')+'\n'+
            'Version: '+pkg.version+'\n' +
            'Description: '+pkg.description+'\n'+
            '---\n'+
            '*/\n\n'
};

gulp.task('build',function(){
    fse.createOutputStream('./docs/js/test_1.js');
    fse.outputFile('./docs/js/test_1.js',
        banner.header
    );
    fse.createOutputStream('./docs/js/test_2.js');
    fse.outputFile('./docs/js/test_2.js',
        banner.header
    );
});

gulp.task('init',run.task('git init'));
gulp.task('add',run.task('git add .'));
gulp.task('install',run.task(['npm install','bower install']));