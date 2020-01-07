const { addBabelPlugin, addWebpackPlugin, override } = require("customize-cra");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

/**
 * @param {ReactRefreshPluginOptions} [options] Options for react-refresh-plugin.
 */
const isDevelopment = process.env.NODE_ENV !== "production";
const addReactRefresh = options =>
  override(
    isDevelopment && addBabelPlugin("react-refresh/babel"),
    isDevelopment && addWebpackPlugin(new ReactRefreshPlugin(options))
  );

module.exports = { addReactRefresh };
