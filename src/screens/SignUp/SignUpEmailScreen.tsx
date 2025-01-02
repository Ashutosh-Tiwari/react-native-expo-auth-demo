import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import ScreenWrapper from "components/ScreenWrapper";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import React from "react";
import { StyleSheet } from "react-native";

const SignUpEmailScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpEmailScreen">) => {
  const [email, setEmail] = React.useState<string>("");

  const handleSignIn = () => {
    navigation.navigate("SignUpEmailVerificationScreen");
  };

  return (
    <ScreenWrapper>
      <CustomInput placeholder="Enter your email" keyboardType="numeric" />
      <CustomButton title="Next" style={styles.button} onPress={handleSignIn} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 24, marginTop: "40%" },
});

export default SignUpEmailScreen;
