import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackStream from 'webpack-stream';

module.exports = function (gulp) {
    // this tells gulp to take the index.js file and send it to Webpack along with the config and put the resulting files in dist/
    gulp.task('webpack-build', function() {
        return gulp.src('components/client.js')
            .pipe(webpackStream(webpackConfig, webpack) )
            .pipe(gulp.dest('dist/public'))
    });
};
