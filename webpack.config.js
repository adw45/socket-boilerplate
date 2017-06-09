const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};
