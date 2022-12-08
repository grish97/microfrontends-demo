const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/SignIn",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3003,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "SignIn",
      filename: "remoteEntry.js",
      exposes: {
        "./SignIn": "./src/SignIn",
      },
      shared: {
        "@material-ui/core": {
          singleton: true,
        },
        "@material-ui/styles": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        react: {
          singleton: true,
          requiredVersion: deps["react"],
        },
      },
    }),
  ],
};
