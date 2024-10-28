module.exports = {
    root: ['<rootDir>/server'],
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/server/$1'
    },
    verbose: true,
    testMatch: ['**/*.spec.ts'],
}