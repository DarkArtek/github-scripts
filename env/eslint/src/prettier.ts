import type {Linter} from "eslint";

const prettier: Linter.Config = {
    extends: ['plugin:editorconfig/noconflict', 'prettier'],
    plugins: ['editorconfig'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'eol-last': ['error', 'always'],
        'no-trailing-spaces': ['error'],
    }
}

module.exports = prettier