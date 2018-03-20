const webpack = require('webpack');
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  output: {
    path: `${__dirname}/build`,
    filename: '[name].bundle-[hash:6].js',
    publicPath: '/'
  },
	devtool: 'source-map',
	plugins: [
    new CleanWebpackPlugin(['build'], {exclude:  ['images']}),
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new ExtractTextPlugin({
			filename: '[name]-[hash:6].css',
			allChunks: true
		}),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      APPOINTMENTS_URL: 'https://dev.lumera.io/api/appointments',
      SLOTS_URL: 'https://dev.lumera.io/api/slots',
      AUTHENTICATION_URL: 'https://dev.lumera.io/api/authentication',
      USERS_URL: 'https://dev.lumera.io/api/users',
      SENDGRID_URL: 'https://dev.lumera.io/api/sendgrid',
      TWILIO_URL: 'https://dev.lumera.io/api/twilio',
      TRIAGE_URL: 'https://dev.lumera.io/api/triage',
      PATIENTS_URL: 'https://dev.lumera.io/api/patients',
      REDIRECTS_ON: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    })
	],
	module: {
  	rules: [
  		{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
        	fallback: 'style-loader',
        	use: [
            {
              loader: 'css-loader',
              options: { minimize: true }
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      }
  	]
  }
})