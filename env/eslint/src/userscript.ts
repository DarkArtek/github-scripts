import type { Linter } from 'eslint'


const userScript: Linter.Config = {
    extends: ['plugin:userscripts/recommended'],
    rules: {
        'no-undef': 'off',
        'xss/no-mixed-html': 'off',
        'xss/no-location-href-assign': 'off',
        'userscripts/compat-grant': [
            'error',
            {
                requireAllCompatible: true,
            },
        ],
        'userscripts/compat-headers': [
            'error',
            {
                requireAllCompatible: true,
            },
        ],
    },
}

module.exports = userScript