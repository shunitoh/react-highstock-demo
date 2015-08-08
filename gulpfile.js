'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var del         = require('del');
var babelify    = require('babelify');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');

// catch error
var handleErrors = function(){
    var args = Array.prototype.slice.call(arguments);
    $.notify.onError({
        title   : 'Compile Error',
        message : '<%= error.message %>'
    }).apply(this, args);
    this.emit('end');
};

// build
gulp.task('build', ['build:clean'], function(cb) {
    runSequence(['build:app', 'build:init'], cb);
});

gulp.task('build:clean',
    del.bind(null, ['./build/*', './build/.git'], {dot : true})
);

gulp.task('build:app', function() {
    return browserify({
        entries : ['./src/app.jsx']
    })
    .transform(
        babelify.configure({
            sourceMaps : true
        })
    )
    .bundle()
    .pipe($.plumber({errorHandler:handleErrors}))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('build:init', $.shell.task([
    'cp ./src/index.html  ./build/',
    'cp ./src/favicon.ico ./build/'
]));
