module.exports = {
    collectCoverage: false,
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFilesAfterEnv: ['./src/test_setup.ts'],
    testPathIgnorePatterns: ["/.yalc/", "/dist/", "/node_modules/"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    transform: { "^.+\\.tsx?$": "ts-jest" },
    verbose: true
};
