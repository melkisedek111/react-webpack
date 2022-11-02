const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    cache: false,
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index.bundle.js",
		clean: true,
	},
	devServer: {
		port: 3000,
		watchFiles: ["src/*.html"],
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
            {
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
    target: "web"
};

