import type {Linter} from 'eslint'

/**
 * Presets
 */
const common: Linter.Config = {
    extends: ['eslint:recommended', 'plugin:eslint-comments/recommended'],
    rules: {
        'eslint-comments/no-unused-disable': 'error'
    }
}

module.exports = common