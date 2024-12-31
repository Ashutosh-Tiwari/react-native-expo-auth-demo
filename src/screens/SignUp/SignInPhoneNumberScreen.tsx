import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SignUpNavProps } from "../../navigation/SignUp/paramList";
import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";

const SignUpPhoneNumberScreen = ({
  navigation,
}: SignUpNavProps<"SignUpPhoneNumberScreen">) => {
  return (
    <View style={styles.container}>
      <CustomInput placeholder="Enter your name" />
      <CustomButton
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
