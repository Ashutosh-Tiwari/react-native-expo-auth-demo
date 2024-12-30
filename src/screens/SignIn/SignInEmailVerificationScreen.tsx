import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { SignInNavProps } from "../../navigation/SignIn/paramList";

const SignInEmailVerificationScreen = ({
  navigation,
  route,
}: SignInNavProps<"SignInEmailVerificationScreen">) => {
  const [verificationCode, setVerificationCode] = React.useState("");

  const handleVerify = () => {
    // TODO: navigate to welcome screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email Verification</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter verification code"
        value={verificationCode}
        onChangeText={setVerificationCode}
        keyboardType="numeric"
      />
      <Button title="Verify" onPress={handleVerify} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default SignInEmailVerificationScreen;
