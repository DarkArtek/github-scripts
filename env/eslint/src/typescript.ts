import type {Linter} from 'eslint'

const typescript: Linter.Config = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        lib: ['esnext'],
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
            },
        ],
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    }
}

module.exports = typescript