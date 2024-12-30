import { SignUpNavProps } from "navigation/SignUp/paramList";
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const SignUpEmailScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpEmailScreen">) => {
  const [email, setEmail] = React.useState<string>("");

  const handleSignIn = () => {
    navigation.navigate("SignUpEmailVerificationScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Sign In" onPress={handleSignIn} />
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
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default SignUpEmailScreen;
