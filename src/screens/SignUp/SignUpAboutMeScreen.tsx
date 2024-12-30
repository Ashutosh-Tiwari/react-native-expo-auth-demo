import { SignUpNavProps } from "navigation/SignUp/paramList";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignUpAboutMeScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpAboutMeScreen">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>

      <Button title="Go to Welcome Screen" onPress={() => {}} />
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

export default SignUpAboutMeScreen;
