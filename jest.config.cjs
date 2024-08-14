module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest'
    },
    moduleFileExtensions: ['js', 'vue'],
    transformIgnorePatterns: [
        "/node_modules/(?!entities/dist/commonjs)/"
      ],
};
