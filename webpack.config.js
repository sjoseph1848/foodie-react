const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index_bunde.js'
},
module: {
    rules: [
        { test: /\.(js)$/,use:'babel-loader' },
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},       
        {test: /\.(png|svg|jpg|gif)$/, use:['file-loader']}
    ]
},

mode: 'development',
plugins: [
    new HtmlWebpackPlugin({
        template: 'app/index.html'
    })
]
}