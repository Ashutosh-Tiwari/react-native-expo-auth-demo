import React from "react";
import { StyleSheet } from "react-native";
import { SignUpNavProps } from "../../navigation/SignUp/paramList";
import ScreenWrapper from "components/ScreenWrapper";
import PhoneInputComponent from "components/common/PhoneInputComponent";

const SignUpPhoneNumberScreen = ({
  navigation,
}: SignUpNavProps<"SignUpPhoneNumberScreen">) => {
  return (
    <ScreenWrapper style={styles.container}>
      <PhoneInputComponent
        onNextPress={() => navigation.navigate("SignUpOTPVerificationScreen")}
        onChangeText={(text) => {}}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
  },
});

export default SignUpPhoneNumberScreen;
