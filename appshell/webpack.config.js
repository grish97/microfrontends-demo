const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
  },
  output: {
    publicPath: "auto",
  },
  optimization: {
    chunkIds: "named",
  },
  stats: {
    chunks: true,
    modules: false,
    chunkModules: true,
    chunkOrigins: true,
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
      name: "AppShell",
      remotes: {
        MyAccount: "MyAccount@http://localhost:3004/remoteEntry.js",
        Catalog: "Catalog@http://localhost:3002/remoteEntry.js",
        SignIn: "SignIn@http://localhost:3003/remoteEntry.js",
        // SignIn: "SignIn@http://signin.micro.net/signin/remoteEntry.js"
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        },
        "@material-ui/core": {
          singleton: true,
        },
        "@material-ui/icons": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
