import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SignInNavProps } from "../../navigation/SignIn/paramList";

const SignInPhoneNumberScreen = ({
  navigation,
}: SignInNavProps<"SignInPhoneNumberScreen">) => {
  return (
    <View style={styles.container}>
      <Text>Phone Number Screen</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate("SignInOTPVerificationScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignInPhoneNumberScreen;
