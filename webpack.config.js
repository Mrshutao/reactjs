var webpack=require("webpack")
var config = {
   entry: {bundle:'./src/main.js',
           common:["react","react-dom","react-bootstrap","react-router","recharts"]},//定义入口文件
	//devtool: 'source-map',
   output: {
      path: __dirname + '/dist',//定义构建后的文件的输出路径
      publicPath:"/dist/",
      filename: '[name].js',//构建文件名
   },
//测试环境端口设置	
   devServer: {
      inline: true,
      port: 8888,
   },
//关于模块的加载相关
   module: {
      loaders: [ 
//babel转码
      {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader?-babelrc,+cacheDirectory,presets[]=es2015,presets[]=react',
			
      },
//css样式加载模块
      {
         test:/\.css$/,
         loader:"style-loader!css-loader"
      },
//图片加载模块
      {
         test: /\.(png|jpg|jpeg|svg|gif)$/,
         loader: 'url-loader?limit=10240&name=img/[name].[ext]',
      },

     
]
   },
//避免这些类库的源码被构建到bundle.js，增加编译速度
   externals: {
         'react': 'React',
         'react-dom': 'ReactDOM',
         'router':'ReactRouter',
         'react-bootstrap':'ReactBootstrap',
         'recharts':'Recharts' 
    },
//webpack在构建包的时候会按目录的进行文件的查找，resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀：
    resolve:{
      extensions:[".webpack.js", ".web.js", ".js"]
   },

   plugins: [
      new webpack.optimize.CommonsChunkPlugin({
         names: ['common','mainfest']
      })
   
   ]

	
}

module.exports = config;
