import React from "react";
import { StyleSheet } from "react-native";
import { SignInNavProps } from "../../navigation/SignIn/paramList";
import ScreenWrapper from "components/ScreenWrapper";
import PhoneInputComponent from "components/common/PhoneInputComponent";

const SignInPhoneNumberScreen = ({
  navigation,
}: SignInNavProps<"SignInPhoneNumberScreen">) => {
  return (
    <ScreenWrapper style={styles.container}>
      <PhoneInputComponent
        onPress={() => navigation.navigate("SignInOTPVerificationScreen")}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
  },
});

export default SignInPhoneNumberScreen;
