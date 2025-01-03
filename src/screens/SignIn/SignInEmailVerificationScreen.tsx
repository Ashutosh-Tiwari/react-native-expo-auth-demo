import React from "react";
import { StyleSheet } from "react-native";
import { SignInNavProps } from "../../navigation/SignIn/paramList";
import ScreenWrapper from "components/ScreenWrapper";
import CustomInput from "components/CustomInput";
import CustomButton from "components/CustomButton";

const SignInEmailVerificationScreen = ({
  navigation,
  route,
}: SignInNavProps<"SignInEmailVerificationScreen">) => {
  const handleVerify = () => {
    navigation.getParent()?.reset({
      index: 0,
      routes: [
        {
          name: "WelcomeScreen",
          params: {
            firstName: "Paresh Mayani",
            phoneNumber: "0123456789",
            email: "paresh.mayani@solguruz.com",
            location: "India",
            hobbies: ["Sports", "Cooking"],
            startSign: "Aries",
          },
        },
      ],
    });
  };

  return (
    <ScreenWrapper>
      <CustomInput placeholder="Enter your code" keyboardType="numeric" />
      <CustomButton title="Next" style={styles.button} onPress={handleVerify} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 24, marginTop: "40%" },
});

export default SignInEmailVerificationScreen;
