const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const helpers = require('./helpers');

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';

module.exports = {
  entry: {
    'app': [
      helpers.root('client/src/index.js')
    ],
    vendor: ['react', 'react-dom','react-router-dom']
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
    alias: {
      'app': 'client/src'
    }
  },

  module: {
    rules: [
      // JS files
      /* {
        test: /\.js$/,
        options: {
          ignore: ['/node_modules/','/server/','/config']
        },
        include: helpers.root ('client'),
        loader: 'babel-loader'
      },
*/
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: helpers.root('client'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react', "stage-0"]
          }
        }],
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000',
      },

        {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },


      // SCSS files
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                'sourceMap': true,
                'importLoaders': 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
   //   minChunks: Infinity,
     filename: 'js/lib.js'
    }), 

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),

    new HtmlWebpackPlugin({
      template: helpers.root('client/public/index.html'),
      inject: 'body'
    }),

    new ExtractTextPlugin({
      filename: 'css/main.css'
    }),

    new CopyWebpackPlugin(
     [{
      from: helpers.root('client/public')
   }]
   )
  ]
};
