/* eslint comma-dangle: ["error", "always-multiline"] */
/* eslint eol-last: ["error", "never"] */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)