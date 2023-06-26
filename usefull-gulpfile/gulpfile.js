const imagemin = require('gulp-imagemin');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const minifyJs = require('gulp-babel-minify');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const nonProdCssPath = './../../../dist/main.css';
const errorNonProdCssPath = './../../dist/main.css';
const prodCssPath = 'main.min.css';

const nonProdJsPath = './../../../dist/main.js';
const prodJsPath = 'main.min.js';

// DEV

/**
 * Compile scss type to the css and move to the dist folder
 * @param  {[function]} arg1 [callback function]
 * @return {[Void]}      [Void]
 */
async function compilescss(cb) {
  gulp.src('./src/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('./dist/'));
  cb();
}

/**
 * Concat all Js files and move it to dist folder
 * @param  {[function]} arg1 [callback function]
 * @return {[Void]}      [Void]
 */
async function compilejs(cb) {
  gulp.src('./src/**/*.js').pipe(concat('main.js')).pipe(gulp.dest('./dist'));
  cb();
}

// PROD
/**
 * Copy images to dist
 * @param  {[function]} arg1 [callback function]
 * @return {[Void]}      [Void]
 */

async function copyStatic(cb) {
  gulp
    .src('./src/static/**/*.html')
    .pipe(replace(nonProdCssPath, prodCssPath))
    .pipe(replace(errorNonProdCssPath, prodCssPath))
    .pipe(replace(nonProdJsPath, prodJsPath))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
  cb();
}

/**
 * Copy images to the dist
 * @param  {[function]} arg1 [callback function]
 * @return {[Void]}      [Void]
 */
async function copyImages(cb) {
  gulp.src('./src/images/**').pipe(gulp.dest('dist/images'));
  cb();
}

/**
 * Copy fonts to the dist
 * @param  {[function]} arg1 [callback function]
 * @return {[Void]}      [Void]
 */
async function copyAssets(cb) {
  gulp.src('./src/assets/**/*').pipe(gulp.dest('dist/assets/'));
  cb();
}

/**
 * Compile scss to the css after minify it and move to dist folder
 * @param  {[function]} arg1 [callback function]
 * @return {[Void]}      [Void]
 */
async function minifyCss(cb) {
  gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(
      rename(function (path) {
        return {
          dirname: path.dirname + '',
          basename: path.basename + '.min',
          extname: '.css',
        };
      })
    )
    .pipe(gulp.dest('./dist/'));

  cb();
}

/**
 * Concat all Js files in src folder concat it after rename file minify and move to the dist folder
 * @param  {[function]} arg1 [callback function]
 * @return {[Void]}      [Void]
 */
async function minifyJavascript(cb) {
  gulp
    .src('./src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(
      minifyJs({
        mangle: {
          keepClassName: true,
        },
      })
    )
    .pipe(
      rename(function (path) {
        return {
          dirname: path.dirname + '',
          basename: path.basename + '.min',
          extname: '.js',
        };
      })
    )
    .pipe(gulp.dest('./dist'));

  cb();
}

/**
 * Watch for changes in SCSS or JS and compile it
 * @param  {[function]} arg1 [callback function]
 * @return {[Void]}      [Void]
 */
async function watch(cb) {
  gulp.watch('./src/**/*.js', compilejs);
  gulp.watch('./src/scss/**/*.scss', compilescss);
}

// UTILS
/**
 * Compress all images for prod and move it to dist folder
 * @param  {[function]} arg1 [callback function]
 * @return {[Void]}      [Void]
 */
async function compressImages(cb) {
  try {
    gulp
      .src('./src/images/*')
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 75, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ])
      )

      .pipe(gulp.dest('./src/images'));

    cb();
  } catch (error) {
    console.log(error);
  }
}

exports.compressImages = gulp.parallel(compressImages);
// DEV
exports.watch = gulp.parallel(watch);
// PROD
exports.build = gulp.series(
  copyAssets,
  copyImages,
  copyStatic,
  minifyCss,
  minifyJavascript
);
