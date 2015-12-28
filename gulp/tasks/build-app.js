/*******************************************************
 * Build task
 * Copy files over to the build directory so that we can
 * generate an optimised tar ball that does not include
 * unnecessary files.
 ******************************************************/

module.exports = function(gulp) {
    const distDirectory = './dist/';

    gulp.task('build-app', () => {

        gulp.src('./components/**/*')
            .pipe(gulp.dest(distDirectory +'components'));

        gulp.src('./config/**/*')
            .pipe(gulp.dest(distDirectory + 'config'));

        gulp.src(['./server.js',
                './package.json',
                './index.js',
                './app.js'
            ],
            {base: './'})
            .pipe(gulp.dest(distDirectory));
    });
};