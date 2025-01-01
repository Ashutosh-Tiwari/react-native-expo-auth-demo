import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import ScreenWrapper from "components/ScreenWrapper";
import COLORS from "constants/color";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

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
      <CustomInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="numeric"
      />
      <CustomButton
        title="Next"
        style={styles.button}
        onPress={() => navigation.navigate("SignUpEmailVerificationScreen")}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 24, marginTop: 24 },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    color: COLORS.black,
  },
});

export default SignUpEmailScreen;
