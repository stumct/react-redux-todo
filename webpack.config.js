module.exports = {
  entry: "./src/js/main.js", //this is our entry file
  output: {
    path: './dist', //outputs our files here
    filename: "bundle.js", //to this file
    publicPath: '/' //allows webpack to generate urls
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  }
};
