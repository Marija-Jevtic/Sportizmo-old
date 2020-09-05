const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const gulpStylelint = require('gulp-stylelint');
const htmlValidator = require('gulp-w3c-html-validator');
const checkCSS = require('gulp-check-unused-css');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass =require('gulp-sass');
sass.compiler = require('node-sass');
const access = require('gulp-accessibility');
const onError = function (err) {
    notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
        sound:    "Beep"
    })(err);

    this.emit('end');
};

gulp.task('cssLint', () => {
    return gulp
        .src('./css/*.css')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(gulpStylelint({
            reporters: [{formatter: 'string', console: true}]
        }));
});

gulp.task('validateHtml', () => {

    return gulp.src('views/**/*.html')
        .pipe(htmlValidator())

});

gulp.task('accessibility', () => {
    gulp.src('views/**/*.html')
        .pipe(access({ force: true })).on('error', console.log)
});

gulp.task('findNotUsedCSS', () => {
    return gulp
        .src(['./css/*.css', './views/**/*.html'])
        .pipe(checkCSS());
});

gulp.task('styles', () => {
    return gulp
        .src('./css/*.css')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(cleanCss())
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('sass', () => {
    return gulp
        .src('./sass/./*.scss')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('js', () => {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('images', () => {
    return gulp.src('./img/*.{jpg,png,jpeg}')
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest('./build/img'));
});

gulp.task('build', (done) => {
    gulp.series(['sass', 'images', 'js'])(done);
});

gulp.task('watch', () => {
    gulp.watch(['./sass'], gulp.series(['sass']));
    gulp.watch(['./img'], gulp.series(['images']));
});
