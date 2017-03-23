var webpack=require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
   entry: {bundle:'./src/main.js',
           common:["react","react-dom","react-bootstrap","react-router","recharts","redux","react-redux","redux-thunk",]},//定义入口文件
	//devtool: 'source-map',
   output: {
      path: __dirname + '/dist',//定义构建后的文件的输出路径
      publicPath:"/dist/",
      filename: '[name].js',//构建文件名
   },
//测试环境端口设置	
   devServer: {
      inline: true,
      port: 7777,
   },
//关于模块的加载相关
   module: {
      loaders: [ 
//babel转码
      {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
			
      },
//css样式加载模块
      {
         test:/\.css$/,
         loader: ExtractTextPlugin.extract({fallback:"style-loader",use: "css-loader"})
      },
//图片加载模块
      {
         test: /\.(png|jpg|jpeg|svg|gif)$/,
         loader: 'url-loader?limit=10240&name=img/[name].[ext]',
      },
       {
         test: /\.(woff|svg|eot|ttf|woff2)$/,
         loader: 'file-loader?name=font/[name].[ext]',
      },

     
]
   },

  
//webpack在构建包的时候会按目录的进行文件的查找，resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀：
    resolve:{
      extensions:[".webpack.js", ".web.js", ".js"]
   },

   plugins: [
      new webpack.optimize.CommonsChunkPlugin({
         names: ['common','mainfest']
      }),
      new ExtractTextPlugin({filename:"style.css", disable: true,allChunks:false})
     
   ]

	
}

module.exports = config;
