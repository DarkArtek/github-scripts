import {resolve} from 'path'
import {Linter} from "eslint";

const config: Linter.Config = {
    root: true,
    overrides: [
        {
            files: '**/*.{js,jsx,ts,tsx}',
            extends: [
                resolve(__dirname, 'common.js'),
                resolve(__dirname, 'javascript.js'),
            ],
        },
        {
            files: '**/*.{ts,tsx}',
            extends: resolve(__dirname, 'typescript.js'),
        },
        {
            files: ['**/*.test.{js,ts}', '**/test/**/*.{js,ts}'],
            extends: resolve(__dirname, 'jest.js'),
        },
        {
            files: ['**/*.{j,t}sx'],
            extends: resolve(__dirname, 'react.js'),
        },
        {
            files: ['**/*.user.js'],
            extends: resolve(__dirname, 'userscript.js'),
        },
        {
            files: [
                // Webpack
                '**/webpack.config.{js,ts}',
                // rollup
                '**/rollup.config.{js,ts}',
                // Next.js
                '**/pages/**/*.{js,jsx,ts,tsx}',
            ],
            rules: {
                'import/no-default-export': 'off',
            },
        },
        {
            files: '**/*.{js,jsx,ts,tsx}',
            extends: resolve(__dirname, 'prettier.js'),
        },
    ]
}

module.exports = config