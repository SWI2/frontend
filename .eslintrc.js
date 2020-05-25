const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules)
  .reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc }, {})

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],

  parser: 'babel-eslint',

  env: {
    browser: true,
  },

  reportUnusedDisableDirectives: true,

  rules: {
    ...a11yOff,
    'curly': ['error', 'multi-or-nest'],
    'eqeqeq': ['error', 'smart'],
    'function-call-argument-newline': ['error', 'consistent'],
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': ['error', { props: false }],
    'new-parens': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
        ignore: ['children', 'class', 'className', 'id', 'tag'],
      },
    ],
    'react/state-in-constructor': ['error', 'never'],
    'class-methods-use-this': 'off',
    'camelcase': 'off',
  },

  plugins: ['prettier'],
}
