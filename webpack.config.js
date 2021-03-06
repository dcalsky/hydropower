var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	entry: {
		app: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/scripts/main.js')],
		vendors: ['react', 'react-router', 'classname', 'react-highcharts']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.[hash].js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel-loader']
		},{
			test: /\.css$/,
			loader: 'style!css'
		},{
			test: /\.scss$/,
			loader: 'style!css!sass'
		},{
			test: /\.(woff|jpg|png|ttf)/,
			loader: 'url?limit=100000'
		}]
	},
	resolve: {
	    extensions: ['', '.webpack.js', '.web.js', '.coffee', '.js', '.json', '.jsx', '.html', '.scss', '.css']
	},
	  node: {
	    net: 'empty',
	    tls: 'empty',
	    dns: 'empty'
	  },
	plugins: [
		new CommonsChunkPlugin('vendors', 'vendors.[hash].js'),
	    new HtmlWebpackPlugin({
	      title: '水电',
	      template: './app/www/index.html',
	      inject: 'body'
	    })
	    
	]
};