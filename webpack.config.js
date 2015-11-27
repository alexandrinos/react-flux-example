var path= require('path');      //not for production   hot
var webpack= require('webpack');  //not for production   hot

module.exports={
	devtool:'eval-source-map',  //for debugging very usefull with source maps 
	entry:{
		main:[
		'webpack-dev-server/client?http://localhost:8080',   //not for production   hot
		'webpack/hot/only-dev-server',                        //not for production   hot
		'./src/main.js'
		]
	},
	output:{
		filename:'[name].js',                   //add ./public/ in front if not hot
		path:path.join(__dirname,'public'),   //not for production   hot
		publicPath: '/public/'                //not for production   hot ; this public can be change as you wish
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),   //not for production   hot
		new webpack.NoErrorsPlugin()              //not for production   hot  ; this prevent errors in browser when compiling    
	],
	module:{
		loaders: [
		{
			test: /\.jsx?$/,    
			//exclude: /node_modules/,    // disable if you use hot and add include
			include:path.join(__dirname,'src'),
			loader: 'react-hot!babel-loader',   //the loader that act through test and exclude  ; added the hot; order is right to left
			
		},
		{
			test:/\.scss$/,
			include:path.join(__dirname,'src'),
			loader:'style!css!sass'
		}

		]
	}
}