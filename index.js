const { addBabelPlugin, addWebpackPlugin, override } = require("customize-cra");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpackDevClientEntry = require.resolve(
  "react-dev-utils/webpackHotDevClient"
);
const paths = require("react-scripts/config/paths");

const overrideEntry = () => (config) => {
  config.entry = paths.appIndexJs;
  return config;
};

/**
 * @param {ReactRefreshPluginOptions} [options] Options for react-refresh-plugin.
 */
const isDevelopment = process.env.NODE_ENV !== "production";
const addReactRefresh = (options = {}) =>
  override(
    isDevelopment && overrideEntry(),
    isDevelopment && addBabelPlugin(require.resolve("react-refresh/babel")),
    isDevelopment &&
      addWebpackPlugin(
        new ReactRefreshPlugin({
          overlay: {
            entry: webpackDevClientEntry,
          },
          ...options,
        })
      )
  );

module.exports = { addReactRefresh };
