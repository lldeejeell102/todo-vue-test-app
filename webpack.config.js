const path = require('path');

module.exports = {
  mode: 'development', // Set to 'production' for production builds
  entry: './src/main.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output filename for bundled code
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // Rule for handling Vue components
        loader: 'vue-loader',
      },
      {
        test: /\.js$/, // Rule for handling JavaScript files
        exclude: /node_modules/, // Exclude node_modules folder
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'], // Babel preset for transpiling
        },
      },
      {
        test: /\.css$/, // Rule for handling CSS files
        use: [
          'vue-style-loader', // Inject CSS into the component
          'css-loader', // Process CSS
        ],
      },
      // Add more rules for other file types (images, fonts, etc.)
    ],
  },
};
