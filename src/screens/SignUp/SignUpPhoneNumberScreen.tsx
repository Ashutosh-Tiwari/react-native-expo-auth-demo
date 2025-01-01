import React from "react";
import { Text, StyleSheet } from "react-native";
import { SignUpNavProps } from "../../navigation/SignUp/paramList";
import CustomButton from "components/CustomButton";
import ScreenWrapper from "components/ScreenWrapper";
import PhoneNumberInput from "components/PhoneNumberInput";

const SignUpPhoneNumberScreen = ({
  navigation,
}: SignUpNavProps<"SignUpPhoneNumberScreen">) => {
  return (
    <ScreenWrapper style={styles.container}>
      <PhoneNumberInput
        placeholder="Enter your phone number"
        code="US +1"
        keyboardType="number-pad"
      />
      <Text>
        For security reasons, VoIP numbers cannot be used. Message and data
        rates may apply. Only US customers with US phone numbers are accepted at
        this time.
      </Text>

      <CustomButton
        title="Next"
        style={{ marginHorizontal: 24 }}
        onPress={() => navigation.navigate("SignUpOTPVerificationScreen")}
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
