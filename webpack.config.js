
var config = {
   entry: './main.js',//定义入口文件
	devtool: 'source-map',
   output: {
      path: __dirname+"/",//定义构建后的文件的输出路径
      filename: 'bundle.js',//构建文件名
   },
//测试环境端口设置	
   devServer: {
      inline: true,
      port: 7777,
      devtool: "source-map"
   },
//关于模块的加载相关
   module: {
      loaders: [ 
//babel转码
      {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         },
      },
//css样式加载模块
      {
         test:/\.css$/,
         loader:"style-loader!css-loader"
      },
//图片加载模块
      {
         test: /\.(png|jpg|jpeg|svg)$/,
         loader: 'url-loader?limit=8192&name=img/[name].[ext]'
      },
     
]
   },
//避免这些类库的源码被构建到bundle.js，增加编译速度
   externals: {
         'react': 'React',
         'react-dom': 'ReactDOM',
         'router':'react-router',
         'react-bootstrap':'ReactBootstrap', 
    },
//webpack在构建包的时候会按目录的进行文件的查找，resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀：
    resolve:{
      extensions:['','.js','.json']
   }
	
}

module.exports = config;