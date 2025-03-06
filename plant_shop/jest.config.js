import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app

  dir: './',
});

// Add any custom config to be passed to Jest

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',

  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],

  // Add this to ignore the utils directory from being treated as test files

  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async

export default createJestConfig(customJestConfig);
