var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var path = require("path"),
    public = path.resolve(__dirname, "../");
module.exports = {
    //插件项
    plugins: [commonsPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })//在build目录下自动生成index.html，指定其title
    ],
    
    //页面入口文件配置
    entry: {
        main : ['./public/javascripts/index.js']
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, "./public/res"),
        filename: '[name].bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
    },
};