module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      arrowFunctions: true,
      classes: true,
      modules: true,
      defaultParams: true
    },
    sourceType: "module",
    ecmaVersion: 6
  },
  env: {
    commonjs: true,
    browser: true,
    node: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["html", "react", "prettier"],
  rules: {
    indent: [2, 2], // 控制缩进为2
    //字符串必须使用单引号
    // quotes: ["error", "single"],
    "no-console": 0, //不禁用console
    "no-debugger": 2, //禁用debugger
    "no-var": 0, //对var警告
    // semi: 0, //不强制使用分号
    "no-irregular-whitespace": 0, //不规则的空白不允许
    "no-trailing-spaces": 1, //一行结束后面有空格就发出警告
    "eol-last": 0, //文件以单一的换行符结束
    "semi-spacing": [2, { before: false, after: true }], // 强制分号前后不允许空格
    "space-before-function-paren": 0,
    "react/jsx-uses-react": 2,
    "no-unused-vars": "off",
    // @off 不强制要求写 propTypes
    "react/boolean-prop-naming": "off",
    // 一个 defaultProps 必须有对应的 propTypes
    // @off 不强制要求写 propTypes
    "react/default-props-match-prop-types": "off"
  },
  settings: {
    "import/ignore": ["node_modules"]
  }
};
