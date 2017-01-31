var gulp = require('gulp');
gulp.task('HeyGulp', function(){
	console.log("Hey Gulp, you son!");
});


var uglifycss = require('gulp-uglifycss');
var gulp_concat = require("gulp-concat");
var gulp_rename = require("gulp-rename");
var gulp_scss = require('gulp-sass');
var gulp_sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');
// var watch = require('gulp-watch');
//var tsfmt = require('gulp-tsfmt');
 
gulp.task('default', function () {
  gulp.src("Test/**/*.css")
    .pipe(gulp_concat("concat.css"))
    .pipe(gulp_rename("minify.css"))
    .pipe(uglifycss({
      "maxLineLen": 100000,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('scss', function() {
    gulp.src('src/scss/**/*.scss')
        // .pipe(gulp_sourcemaps.init())
        .pipe(gulp_scss())
        // .pipe(gulp_sourcemaps.write('.'))
        .pipe(gulp_concat("concat.css"))
        .pipe(uglifycss({
          "maxLineLen": 100000,
          "uglyComments": true
        }))
        .pipe(gulp_rename("app.css"))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
	gulp.watch('src/scss/**/*.css',['scss']);
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

// gulp.task('stream', function () {
//     // Endless stream mode 
//     return watch('src/**/*.css', { ignoreInitial: false })
//         .pipe(gulp.dest('build'));
// });

// gulp.task('callback', function () {
//     // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
//     return watch('src/**/*.css', function () {
//         gulp.src('src/**/*.css')
//             .pipe(gulp.dest('build'));
//     });
// });


var changedInPlace = require('gulp-changed-in-place');

gulp.task('changedInPlace', function() {
	 return gulp.src('Test/**/*.css')
    .pipe(changedInPlace())
    .pipe(gulp.dest('./dist/'));
});








