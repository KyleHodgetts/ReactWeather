const webpack = require('webpack');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/pages/weather/Weather.jsx',
      WeatherForm: 'app/components/pages/weather/WeatherForm.jsx',
      WeatherMessage: 'app/components/pages/weather/WeatherMessage.jsx',
      About: 'app/components/pages/About.jsx',
      Examples: 'app/components/pages/Examples.jsx',
      openWeatherMap: 'app/api/OpenWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
     new webpack.optimize.UglifyJsPlugin({
         compress: {
             warnings: false,
         },
         output: {
             comments: false,
         },
     }),
 ]
};
