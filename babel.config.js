module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-graphql',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.ios.js', '.android.js', '.js', '.json'],
      },
    ],
  ],
};
