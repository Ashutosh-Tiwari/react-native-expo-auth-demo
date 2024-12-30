import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SignUpNavProps } from "../navigation/SignUp/paramList";
import { RootNavProps } from "../navigation/Routing/paramList";

const WelcomeScreen = ({ navigation, route }: RootNavProps<"Welcome">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
