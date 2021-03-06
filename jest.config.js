module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '\\.(.css|scss)': 'identity-obj-proxy',
    api: '<rootDir>/src/api',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    'components/(.*)$': '<rootDir>/src/components/$1',
    'contexts/(.*)': '<rootDir>/src/contexts/$1',
    'project-config': '<rootDir>/src/project-config.ts',
    'assets/.*(.jpg|png|svg)': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*.scss.d.ts',
    '!src/(index.tsx|react-env.d.ts)'
  ]
}
