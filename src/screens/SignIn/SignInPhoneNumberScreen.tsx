import React from "react";
import { StyleSheet } from "react-native";
import { SignInNavProps } from "../../navigation/SignIn/paramList";
import ScreenWrapper from "components/ScreenWrapper";
import PhoneInputComponent from "components/common/PhoneInputComponent";
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "src/redux/user/userSlice";

interface FormikProps {
  phoneNumber: string;
}

const SignInPhoneNumberScreen = ({
  navigation,
}: SignInNavProps<"SignInPhoneNumberScreen">) => {
  const dispatch = useDispatch();

  const handlePhoneSubmit = () => {
    // dispatch(setPhoneNumber(phoneNumber));
    // Trigger OTP API here
    navigation.navigate("SignInOTPVerificationScreen");
  };

  return (
    <ScreenWrapper style={styles.container}>
      <PhoneInputComponent
        onNextPress={() => handlePhoneSubmit()}
        onChangeText={() => {}}
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
