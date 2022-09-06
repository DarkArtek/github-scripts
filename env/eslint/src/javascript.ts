import type {Linter} from "eslint";

const javascript: Linter.Config = {
    extends: [
        'plugin:node/recommended',
        'plugin:import/recommended',
        'plugin:xss/recommended'
    ],
    plugins: ['promise', 'unused-imports'],
    env: {
        node: true,
        es2022: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'import/no-default-export': 'error',
        'prefer-arrow-callback': 'error',
        'func-style': [2, 'declaration', {allowArrowFunctions: true}],
        curly: 'error',
        'prefer-template': 'error',
        eqeqeq: 'error',
        strict: ['error', 'global'],
        'import-order': [
            'warn',
            {
                groups: [
                    'builtin',
                    'external',
                    ['parent', 'sibling', 'index'],
                    'object',
                    'type',
                    'unknown',
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                pathGroups: [
                    {
                        pattern: '**.css',
                        group: 'type',
                        position: 'after',
                    },
                ],
                warnOnUnassignedImports: true,
            },
        ],
        'unused-imports/no-unused-imports': 'error',
        'no-restricted-syntax': [
            'error',
            {
                selector:
                // eslint-disable-next-line quotes
                    "CallExpression[callee.property.name='at']:not([arguments.0.type='Literal'],[arguments.0.type='UnaryExpression'][arguments.0.argument.type='Literal'])",
                message: 'at method accepts only a literal argument',
            },
        ],
        'node/prefer-promises/dns': 'error',
        'node/prefer-promises/fs': 'error',
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-missing-import': 'off',
        'node/no-extraneous-import': 'off',
        'node/no-unpublished-import': 'off',
        'dot-notation': 'error',
        'object-shorthand': ['error', 'always'],
    }
}

module.exports = javascript