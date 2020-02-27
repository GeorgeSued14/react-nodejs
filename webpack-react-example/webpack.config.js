const path = require ('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
            test:/\.js$/,
            exclude: /node_modules/,
            loader:'babel-loader',
                query: {
                    presets:['@babel/preset-react','@babel/preset-env'],
                    plugins:['@babel/plugin-proposal-class-properties']
                }
            },

            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ], 
    },
}