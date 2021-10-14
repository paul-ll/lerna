// module.exports = {
//     parserOptions: { ecmaVersion: 2017, sourceType: "module" },
//     extends: ["eslint:recommended"],
//     rules: {
//       "no-unused-vars": ["off"],
//     },
//     env: { node: true, jest: false },
//   };

  module.exports = {
    extends: ['eslint:recommended'],
    //让所有可能会与 prettier 规则存在冲突的 eslint rule失效，并使用 prettier 的规则进行代码检查
    //相当于用 prettier 的规则，覆盖掉 eslint:recommended 的部分规则
   plugins: ['prettier'],
    rules: {
      'no-unused-vars': ['off'],
      //不符合prettier规则的代码要进行错误提示
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
    env: { node: true, jest: false },
  };