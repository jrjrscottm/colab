var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var server = require('gulp-express');
var lr = require('tiny-lr')();
var open = require('gulp-open');

gulp.task('watch', function () {
    // Start the server at the beginning of the task 
    server.run(['server.js']);
 
    // Restart the server when file changes 
    gulp.watch(['views/**/*.html','public/**/*'], server.notify);
 
    gulp.watch(['server.js'], [server.run]);
});