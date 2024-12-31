module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          screens: "./src/screens",
          components: "./src/components",
          navigation: "./src/navigation",
          services: "./src/services",
          constants: "./src/constants",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
