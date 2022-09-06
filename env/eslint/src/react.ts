import type {Linter} from "eslint";

const react: Linter.Config = {
    extends: [
        // https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js
        'next/core-web-vitals',
        'plugin:css-import-order/recommended',
    ],
    plugins: ['css-import-order'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        jsxPragma: 'React',
        lib: ['dom'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/jsx-boolean-value': 'error',
        'react/jsx-curly-brace-presence': 'error',
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'react/jsx-pascal-case': 'error',
    }
}

module.exports = react