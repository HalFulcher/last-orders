module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["module:react-native-dotenv"],
  };
};

// module.exports = {
//   presets: ["module:metro-react-native-babel-preset"], ["babel-preset-expo"],
//   plugins: [
//     [
//       "module:react-native-dotenv",
//       {
//         moduleName: "@env",
//         path: ".env",
//         blacklist: null,
//         whitelist: ["REACT_APP_API_KEY"],
//         safe: false,
//         allowUndefined: true,
//       },
//     ],
//   ],
// };
