var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var browserSync = require("browser-sync");
var jade = require("gulp-jade");
var sass = require("gulp-sass");

//live load when edit file

gulp.task("liveload", ["compile-jade", "run", "compile-sass"], function(){
  browserSync.init({
    proxy: "localhost:8888",
    files: ["./client/**/*.*"],
    browser: ["firefox"],
    port: "7000"
  });
  gulp.watch('./src/*.jade', ['compile-jade']);
  gulp.watch('./src/*.scss', ['compile-sass']);
});

gulp.task("compile-sass", function(){
  return gulp.src("./src/*.scss")
  .pipe(sass())
  .pipe(gulp.dest('./client/css/'))
});

//compile jade

gulp.task("compile-jade", function(){
  gulp.src("./src/*.jade")
  .pipe(jade())
  .pipe(gulp.dest('./client/'))
});


//task for start server
gulp.task("run", function(cb){
  var started = false;

  return nodemon({
    script: 'server.js'
    }).on('start', function () {
    // to avoid nodemon being started multiple times
    if (!started) {
      cb();
      started = true;
    }
  });
});
