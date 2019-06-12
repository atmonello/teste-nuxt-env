module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'comma-dangle': ['error', 'always'],
    'quotes': ['error', 'double', { 'allowTemplateLiterals': true }],
    'semi': ['error', 'always'],
    'no-console': 'off'
  }
}
