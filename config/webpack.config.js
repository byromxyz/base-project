const path = require('path');

const entry = path.join(__dirname, '../', 'src', 'index.ts');
const source = path.resolve(__dirname, '../', 'src');
const dist = path.resolve(__dirname, '../', 'dist');

module.exports = {
  mode: 'development',
  entry,
  output: {
    path: dist,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: { configFile: path.join(__dirname, 'tsconfig.json') }
        },
        include: source,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};