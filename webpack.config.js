const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    "mode": "development",
    "entry": {
        "bundle": path.resolve(__dirname, "src/main.js"),
    },
    "output": {
        "path": path.resolve(__dirname, "dist"),
        "filename": "[name][contenthash].js",
        "clean": true
    },
    "devtool": "source-map",
    "devServer": {
        "static": {
            "directory": path.resolve(__dirname, "dist")
        },

        "port": 3000,
        open: true,
        hot: true,
        compress: true
    },
    "module": {
        "rules": [{
            "test": /\.css$/i,
            "use": ["style-loader", "css-loader"]
        }]
    },
    "plugins": [
        new HtmlWebpackPlugin({
            "title": "Battleship",
            "filename": "index.html",
            "template": "src/index.html",
            "inject": "head",
            "scriptLoading": "defer"
        })
    ]
};