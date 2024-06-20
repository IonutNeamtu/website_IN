const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/main.ts',
  },
  resolve: {
    alias: {
      '@hot-api': path.resolve(__dirname, 'src/hot-api.js'), // Create this file (explained later)
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
