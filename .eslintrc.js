// .eslintrc.js
module.exports = {
  plugins: ["react-hooks"],
  rules: {
    // 关闭所有可能引起烦恼的规则
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/display-name": "off",
    "no-console": "off",
    // 如果使用 TypeScript，关闭 prop-types 检查
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
  },
};
