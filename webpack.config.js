const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        rivraddon : './src/index.js',
    },
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: 'rivraddon.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: 'static' },
        ]),
    ],
};
