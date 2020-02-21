const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: [
		'./src/index.js',
	],
	output: {
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src/'),
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/react'],
					},
				},
			},
			{
				include: [
					path.resolve(__dirname, 'src/assets/scss'),
				],
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: 'sass-loader',
						options: {
							discardDuplicates: true,
							importLoaders: 1,
							modules: true,
							sourceMap: true,
							localIdentName: '[name]_[hash:base64:5]',
						},
					},
				],
			},
		],
	},
};