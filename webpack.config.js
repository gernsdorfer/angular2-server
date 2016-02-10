var webpackMerge = require('webpack-merge');
var path = require('path');

var common = {
    resolve: {
        extensions: ['', '.ts', '.json', '.js','.html', '.css','.scss']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [/node_modules/]
            },
            // support for .html as raw text
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [ root('src/index.html') ]
            },
            // Support for CSS as raw text
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader', 'resolve-url']            }


        ]
    }
};
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
var client = {
    target: 'web',
    entry: './src/client',
    output: {
        path: __dirname + '/dist/client'
    }
};

var server = {
    target: 'node',
    entry: './src/server',
    output: {
        path: __dirname + '/dist/server'
    },
    externals: function checkNodeImport(context, request, cb) {
        if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
            cb(null, 'commonjs ' + request);
            return;
        }
        cb();
    },
    node: {
        global: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: true
    }
};

var defaults = {
    context: __dirname,
    resolve: {
        root: __dirname + '/src'
    },
    output: {
        publicPath: path.resolve(__dirname),
        filename: 'bundle.js'
    }
}

module.exports = [
    // Client
    webpackMerge({}, defaults, common, client),

    // Server
    webpackMerge({}, defaults, common, server)
]
