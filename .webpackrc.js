const path = require("path");
const pxtorem = require("postcss-pxtorem");
const pxtorem2 = _interopRequireDefault(pxtorem).default;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

export default {
  entry: "./src/index.js",
  env: {
    development: {
      publicPath: "/",
      extraPostCSSPlugins: [pxtorem2({ rootValue: 16, propWhiteList: [] })]
    },
    production: {
      publicPath: "/",
      extraPostCSSPlugins: [pxtorem2({ rootValue: 16, propWhiteList: [] })]
    }
  },
  extraBabelPlugins: [["import", { libraryName: "antd-mobile", libraryDirectory: "es", style: "css" }]],
  alias: {
    "@": path.resolve(__dirname, "src")
  },
  disableCSSModules: true
};
