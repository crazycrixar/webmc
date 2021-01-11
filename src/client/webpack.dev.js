// Generated by CoffeeScript 2.5.1
(function() {
  var buildPath;

  buildPath = `${__dirname}/public`;

  module.exports = function(env) {
    return {
      mode: "development",
      entry: './js/index.js',
      output: {
        path: buildPath,
        filename: 'bundle.js'
      },
      performance: {
        maxEntrypointSize: 1.5e6,
        maxAssetSize: 1.5e6
      },
      stats: {
        modules: false
      },
      devtool: 'source-map',
      module: {
        rules: [
          {
            loader: "worker-loader",
            test: /\.worker\.js$/,
            options: {
              filename: "[contenthash].js"
            }
          }
        ]
      }
    };
  };

}).call(this);