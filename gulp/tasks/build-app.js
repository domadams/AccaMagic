/*******************************************************
 * Build task
 * Copy files over to the build directory so that we can
 * generate an optimised tar ball that does not include
 * unnecessary files.
 ******************************************************/

module.exports = function(gulp) {
    const distDirectory = './dist/';

    gulp.task('build-app', () => {
        gulp.src('./package.json', { base: './'})
            .pipe(gulp.dest(distDirectory));

        gulp.src('./assets/fonts', { base: './'})
            .pipe(gulp.dest(`${distDirectory}/public/fonts`));
    });
};