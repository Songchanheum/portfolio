module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    //'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'spaced-comment': 'off', // 주석을 뒤에 쓸 수 있다.
    'no-unused-vars': 'off', // 사용 안한 변수 중복 제거
    'global-require': 'off', // 함수 내에서 require 사용 가능
    'arrow-body-style': 'off', // 화살표 함수 안에 return을 사용할 수 있다.
    'react/no-unescaped-entities': 'off', // 문자열 내에서 " ' > } 허용
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'jsx-a11y/anchor-is-valid': 'off', // next js 에서는 a태그에 href 없이 사용
  },
};
