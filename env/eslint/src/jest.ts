import type {Linter} from "eslint";

const jest: Linter.Config = {
    plugins: ['jest'],
    extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-formatting/recommended',
    ],
    env: {
        'jest/globals': true,
    },
    rules: {},
}

module.exports = jest