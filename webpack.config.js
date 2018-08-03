const path = require('path');

const source = path.join(__dirname, './src/client');
const destination = path.join(__dirname, './src/client/dist');

module.exports = {
  entry: `${source}/App.jsx`,
  output: {
    filename: 'bundle.js',
    path: destination,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: source,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};