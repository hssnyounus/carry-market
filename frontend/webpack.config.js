const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    // entry:path.resolve(__dirname,'src','index.js'),
    entry: './src/index.js',

    output: {
    
        filename: 'bundle.js',
         path: path.join(__dirname, 'dist'),
         publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s?css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.s[ac]ss$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
            // },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        // contentBase: path.resolve(__dirname, './src'),
        // inline: true,
        historyApiFallback: true,
        port: 2000,
        // compress: true,
        // contentBase: path.resolve(__dirname, 'src','index.html')
    },
    // devtool: 'cheap-module-eval-source-map',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './public/index.html'
        }),
        // new ManifestPlugin(),
        // new MiniCssExtractPlugin()
    ],


}
