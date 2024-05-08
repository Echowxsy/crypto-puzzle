const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const providePlugin = new webpack.ProvidePlugin({
  process: 'process/browser',
  Buffer: ['buffer', 'Buffer'],
  Crypto: 'crypto',
});
module.exports = {
    mode: 'production', // 环境
    entry: './worker.js', // 入口文件
    output: {
        path: path.resolve(__dirname, './dist/worker/'), // 输出文件夹
        filename: 'worker.js', // 文件名称
        libraryTarget: 'umd', // 打包方式
        globalObject: 'this', // 全局对象
        library: 'worker', // 类库名称
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(), // 清除上一次打包内容
        providePlugin,
    ],
    externals: {
        jquery: "jQuery", // 不参与打包编译
    },
}