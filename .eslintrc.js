module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [ 'plugin:jest/recommended' ],
    plugins: [ 'import' ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    ignorePatterns: ["!.husky"],
    rules: {
        'space-before-function-paren': ["error", "never"],
        'space-in-parens': ["error", "always"],
        
        'no-restricted-syntax': ['off', 'ForOfStatement'],

        'linebreak-style': 'off',

        'arrow-parens': 'off',
        'object-curly-newline': 'off',
        'no-mixed-operators': 'off',
        'arrow-body-style': 'off',
        'function-paren-newline': 'off',
        'no-plusplus': 'off',

        'no-param-reassign': 'off',

        'prefer-destructuring': 'off',
    },
};