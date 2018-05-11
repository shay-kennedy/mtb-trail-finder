import webpack from 'webpack'
import path from 'path'
import packageData from './package.json'


const isProduction = process.env.NODE_ENV === 'production'

const base = {
  entry: path.resolve(__dirname, packageData['main:client']),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ]
  }
}

const productionConfig = {
  output: {
    path: path.resolve(__dirname, 'build/production/client/js'),
    filename: `${packageData.name}.${packageData.version}.min.js`,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    })
  ],
}

const developmentConfig = {
  output: {
    path: path.resolve(__dirname, 'build/dev/client/js'),
    filename: `${packageData.name}.${packageData.version}.js`,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    })
  ],
}

export default Object.assign({}, base, isProduction === true ? productionConfig : developmentConfig)
