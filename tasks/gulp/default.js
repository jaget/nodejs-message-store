var gulp = require('gulp');
var runSequence = require('run-sequence');

// Consolidated dev phase task
gulp.task('default', function(callback) {
    runSequence(
        'karma',
        callback
    );
});