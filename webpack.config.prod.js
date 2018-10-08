import webpack from 'webpack';
import path from 'path';
// minify html, and dynamically add names of bundled .css and .js files.
// these filenames (e.g. vendor.479204b0e8d197d6051b.js) change with every build
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash'; //cache-busting
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
//import ExtractTextPlugin from 'extract-text-webpack-plugin';

// commonsChunkPlugin: removed in Webpack 4. Use optimization.splitChunks instead.

//debug: true,
//noInfo: false,

export default {
  mode: 'production',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  //higher quality than 'inline-source-maps'
  devtool: 'source-map',
  // bundle-splitting
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),  // new
    publicPath: '/',
    // 'name' refers to 'entry' key above
    // 'chunkhash' to new WebpackMd5Hash() below
    filename: '[name].[chunkhash].js' },
  // was: commonsChunkPlugin. Use optimization.splitChunks instead.
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    // Global loader configuration
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true // set to false to see a list of every file being bundled.
    }),

    // (separate css and js)
    // Generate an external css file with a hash in the filename
    //new ExtractTextPlugin('[name].[contenthash].css'),
    new MiniCssExtractPlugin('[name].[md5:contenthash:hex:20].css'),
    //new ExtractTextPlugin('[name].[md5:contenthash:hex:20].css'),
    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately.
    // No longer used for Webpack 4. See optimization.splitChunks above instead.
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: false,  // replaces UglifyJSPlugin?
        minifyCSS: true,
        minifyURLs: false
      },
      inject: true,
      // Properties you define here are available in index.html
      // using htmlWebpackPlugin.options.varName
      trackJSToken: false, //'INSERT YOUR TOKEN HERE'
    })

    // Eliminate duplicate packages when generating bundle
    //new webpack.optimize.DedupePlugin()

    // Code is automatically minified in prod mode as of Webpack 4, so removing this.
    // Minify JS
    //new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      // { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('css-loader?sourceMap')
      // } // extra param is a hint to webpack
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },

          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },

          // {
          //   loader: 'postcss-loader'
          // }
        ]
      }]
  }
};
