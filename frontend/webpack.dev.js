const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  output: {
    path: `${__dirname}/build`,
    filename: '[name].bundle.js'
  },
	devtool: 'inline-source-map',
	devServer: {
    contentBase: join(__dirname, 'build'),
    hot: true,
    historyApiFallback: true
  },
  module: {
  	rules: [
  		{
        test: /\.scss$/,
        use: [
        	'style-loader',
        	'css-loader',
          'postcss-loader',
        	'sass-loader'
        ]
      }
  	]
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      APPOINTMENTS_URL: 'http://0.0.0.0:3000',
      SLOTS_URL: 'http://0.0.0.0:3009',
      AUTHENTICATION_URL: 'http://0.0.0.0:3001',
      USERS_URL: 'http://0.0.0.0:3002',
      SENDGRID_URL: 'http://0.0.0.0:3003',
      TWILIO_URL: 'http://0.0.0.0:3004',
      TRIAGE_URL: 'http://0.0.0.0:3005',
      PATIENTS_URL: 'http://0.0.0.0:3006',
      REDIRECTS_ON: true
    })
  ]
})