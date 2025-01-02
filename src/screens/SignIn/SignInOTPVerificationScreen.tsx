import React from "react";
import { StyleSheet } from "react-native";
import { SignInNavProps } from "../../navigation/SignIn/paramList";
import CustomInput from "components/CustomInput";
import CustomButton from "components/CustomButton";
import ScreenWrapper from "components/ScreenWrapper";

const SignInOTPVerificationScreen = ({
  navigation,
  route,
}: SignInNavProps<"SignInOTPVerificationScreen">) => {
  return (
    <ScreenWrapper>
      <CustomInput placeholder="Enter your code" keyboardType="numeric" />
      <CustomButton
        title="Next"
        style={styles.button}
        onPress={() => navigation.navigate("SignInEmailScreen")}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 24, marginTop: "40%" },
});

export default SignInOTPVerificationScreen;
