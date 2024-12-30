import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SignUpNavProps } from "../../navigation/SignUp/paramList";

const SignUpPhoneNumberScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpPhoneNumberScreen">) => {
  return (
    <View style={styles.container}>
      <Text>Phone Number Screen</Text>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate("SignUpOTPVerificationScreen")}
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

export default SignUpPhoneNumberScreen;
