const { mergeDeepRight } = require("ramda");
const getWebpackConfig = require("./webpack.config.base");

const ENV_IDENTIFIER = "RODONES_PANEL";

module.exports = mergeDeepRight(getWebpackConfig(ENV_IDENTIFIER), {
  devServer: {
    port: 8001,
  },
});
