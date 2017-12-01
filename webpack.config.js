var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var environment = function(_nodeEnv){
    var ret = {
        inputPath: './src',
        outputPath: '/' + _nodeEnv,
        env: _nodeEnv
    }
    return ret
}
var _env = environment(process.env.NODE_ENV)
module.exports = {
    entry: {
        major: _env.inputPath + '/app.js',
        make_redux:_env.inputPath + '/make-redux/index.js',
        make_redux2:_env.inputPath + '/make-redux2/index.js',   //使用原生的去模拟redux
        redux:_env.inputPath + '/redux-real/index.js'  //使用真正的redux去构建应用的状态
    },
    output: {
        path: __dirname + '/dist' + _env.outputPath,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
        
                loader: 'babel-loader',
                query:{
                    presets:['es2015','stage-0','react']
                  }
               
            },
            {
                test: /\.css$/, 
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ],
        extensions: ['.js', '.json', '.jsx', '.css']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'src/redux-real'),
        compress: true,
        port: 2111
    },
    plugins: [
    ]
}