const R = require("ramda");
const RA = require("ramda-adjunct");
const dotenv = require("dotenv");
const path = require("path");
const WebpackBar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { EnvironmentPlugin, ProvidePlugin } = require("webpack");

function getAppConfig(envPrefix) {
  // Load environment files from .env files
  dotenv.config();

  const isDevelopment = process.env.NODE_ENV !== "production";

  // Pick environment variables start with envIdentifier (REACT_APP_* like)
  const environment = R.pickBy(
    R.flip(R.startsWith(`${envPrefix}_`)),
    process.env,
  );

  return {
    mode: isDevelopment ? "development" : "production",
    devtool: isDevelopment ? "eval-source-map" : false,
    entry: path.join(__dirname, ".", "src", "index.tsx"),
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                [
                  "@babel/preset-react",
                  {
                    runtime: "automatic",
                  },
                ],
                "@babel/preset-typescript",
              ],
              plugins: RA.compact([
                [
                  "@babel/plugin-transform-runtime",
                  {
                    regenerator: true,
                  },
                ],
                isDevelopment && require.resolve("react-refresh/babel"),
              ]),
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    stats: {
      modules: false,
    },
    devServer: {
      static: path.join(__dirname, "dist"),
      compress: true,
      open: false,
      hot: true,
    },
    plugins: RA.compact([
      new ProvidePlugin({
        process: "process/browser",
      }),
      new EnvironmentPlugin(environment),
      new HtmlWebpackPlugin({
        template: path.resolve(module.parent.path, "public", "index.html"),
        templateParameters: environment,
      }),
      new WebpackBar(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ]),
  };
}

module.exports = getAppConfig;
