import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import ScreenWrapper from "components/ScreenWrapper";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const SignUpEmailVerificationScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpEmailVerificationScreen">) => {
  const [verificationCode, setVerificationCode] = React.useState("");

  const handleVerify = () => {
    navigation.navigate("SignUpNameScreen");
  };

  return (
    <ScreenWrapper>
      <CustomInput
        placeholder="Enter your code"
        value={verificationCode}
        onChangeText={setVerificationCode}
        keyboardType="numeric"
      />
      <CustomButton title="Next" style={styles.button} onPress={handleVerify} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 24, marginTop: 24 },
});

export default SignUpEmailVerificationScreen;
