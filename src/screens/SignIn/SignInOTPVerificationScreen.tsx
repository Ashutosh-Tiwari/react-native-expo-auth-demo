import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { SignInNavProps } from "../../navigation/SignIn/paramList";

const SignInOTPVerificationScreen = ({
  navigation,
  route,
}: SignInNavProps<"SignInOTPVerificationScreen">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
      />
      <Button
        title="Verify OTP"
        onPress={() => navigation.navigate("SignInEmailScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
  },
});

export default SignInOTPVerificationScreen;
