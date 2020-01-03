// Webpack uses this to work with directories
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// webpack.config.js
// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

    // Path to your entry point. From this file Webpack will begin his work
    entry: ['./src/javascript/index.js'],

    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.js$/,
                /* ... */
            },
            {
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,

                // Set loaders to transform files.
                // Loaders are applying from right to left(!)
                // The first loader will be applied after others
                use: [
                    {
                        // This loader resolves url() and @imports inside CSS
                        loader: "css-loader",
                    },
                    {
                        // Then we apply postCSS fixes like autoprefixer and minifying
                        loader: "postcss-loader"
                    },
                    {
                        // First we transform SASS to standard CSS
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },
            {
                // Ask webpack to check: If this file ends with .vue, then apply some transforms
                test: /\.vue$/,
                // don't transform node_modules folder (which don't need to be compiled)
                exclude: /(node_modules|bower_components)/,
                // Transform it with vue
                use: {
                    loader: 'vue-loader'
                }
            },

        ],
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript
    // minifying and other thing so let's set mode to development
    mode: 'development',
    watch:true
};
