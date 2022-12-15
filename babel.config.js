module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {},
  },
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    ["@babel/plugin-proposal-optional-catch-binding"],
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".js", ".ts", ".tsx", ".json", ".spec.ts"],
        alias: {
          "@components": "./app/components",
          "@navigators": "./app/navigators",
          "@services": "./app/services",
          "@styles": "./app/styles",
          "@theme": "./app/theme",
          "@utils": "./app/utils",
          "@models": "./app/models",
          "@assets": "./assets",
          "@screens": "./app/screens",
          "@constants": "./app/constants",
        },
      },
    ],
    ["react-native-reanimated/plugin"],
  ],
}
