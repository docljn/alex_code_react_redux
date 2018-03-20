const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
	entry: { app: `${__dirname}/src/app.js` },
	resolve: {
		extensions: ['.js', '.jsx']
	},
	node: {
		fs: "empty"
	},
	plugins: [
    // new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
					plugins: ['transform-object-rest-spread']
				}
			},
      {
        test: /\.(png|jpg|ttf)$/,
        use: [
         	{ loader: 'url-loader', options: { limit: 5000192 } }
        ]
      }
		]
	}
}

module.exports = config
