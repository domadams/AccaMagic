var path = require('path');
var webpack = require('webpack');

var commonLoaders = [
    { test: /\.js$/, loader: 'babel-loader' }
];

module.exports = [
    {
        // The configuration for the client
        name: 'client-side rendering',
        context: path.join(__dirname),
        entry: './components/client.js',

        output: {
            filename: 'app.js',
            path: path.join(__dirname, 'dist/public')
        },
        module: {
            loaders: commonLoaders
        }
    },
    {
        // The configuration for the server-side rendering
        name: 'server-side rendering',
        entry: './index.js',
        target: 'node',
        output: {
            path: './dist',
            filename: 'server.generated.js',
            libraryTarget: 'commonjs2'
        },
        externals: /^[a-z\-0-9]+$/,
        module: {
            loaders: commonLoaders
        }
    }
];
