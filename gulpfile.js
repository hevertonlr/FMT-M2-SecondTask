const gulp = require("gulp");
const copy = require("gulp-copy");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return gulp
    .src("src/assets/scss/**/*.scss")
    .pipe(
      sass({
        includePaths: ["node_modules"],
        outputStyle: "compressed",
      })
    )
    .on("error", sass.logError)
    .pipe(gulp.dest("src/assets/css"));
}

function watchSass() {
  gulp.watch("src/assets/scss/**/*.scss", compileSass);
}

function fontawesome() {
  return gulp
    .src("node_modules/@fortawesome/fontawesome-free/webfonts/**/*")
    .pipe(copy("src/assets/webfonts/",{prefix: 5}));
}

gulp.task("sass", compileSass);
gulp.task("icons", fontawesome);
gulp.task("watch", watchSass);
