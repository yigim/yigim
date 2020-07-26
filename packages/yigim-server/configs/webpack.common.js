const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const PROJECT_ROOT = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    index: path.join(PROJECT_ROOT, 'src/index.ts'),
  },
  target: 'node',
  output: {
    path: path.join(PROJECT_ROOT, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        context: path.resolve('../'),
        baseUrl: path.resolve('./'),
        configFile: path.resolve('./tsconfig.json'),
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
};
