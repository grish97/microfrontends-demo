const { ModuleFederationPlugin } = require("webpack").container;
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const deps = require('./package.json').dependencies;

module.exports = {
    entry: "./src/App",
    mode: "development",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 3002,
    },
    output: {
      publicPath: "auto",
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx|json)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "imgs", to: "imgs" }
        ],
      }),
      new ModuleFederationPlugin({
        name: "Catalog",
        filename: "remoteEntry.js",
        exposes:{
          "./Catalog": "./src/App"
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
      })
    ],
  };
