import React from "react";
import { StyleSheet } from "react-native";
import { SignInNavProps } from "../../navigation/SignIn/paramList";
import ScreenWrapper from "components/ScreenWrapper";
import CustomInput from "components/CustomInput";
import CustomButton from "components/CustomButton";

const SignInEmailScreen = ({
  navigation,
  route,
}: SignInNavProps<"SignInEmailScreen">) => {
  const [email, setEmail] = React.useState<string>("");

  const handleSignIn = () => {
    navigation.navigate("SignInEmailScreen");
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

export default SignInEmailScreen;
