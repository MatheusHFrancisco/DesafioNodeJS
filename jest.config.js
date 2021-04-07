module.exports = {
  clearMocks: true,
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.test.js?(x)",
    "!**/__tests__/coverage/**",
    "!**/__tests__/utils/**",
    "!**/__tests__/images/**",
  ],
};
