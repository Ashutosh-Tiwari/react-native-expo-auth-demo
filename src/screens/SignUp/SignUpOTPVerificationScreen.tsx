import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Linking,
} from "react-native";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import ScreenWrapper from "components/ScreenWrapper";
import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import COLORS from "constants/color";

const SignUpOTPVerificationScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpOTPVerificationScreen">) => {
  return (
    <ScreenWrapper style={styles.container}>
      <CustomInput placeholder="Enter your code" keyboardType="numeric" />
      <Text>
        We will text you a code to verify you're really you. Message and rates
        may apply.
      </Text>
      <Text
        style={styles.hyperlink}
        onPress={() => Linking.openURL("http://google.com")}
      >
        What happens if my number changes?
      </Text>
      <CustomButton
        title="Next"
        style={styles.button}
        onPress={() => navigation.navigate("SignUpEmailScreen")}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
  },
  button: { marginHorizontal: 24, marginTop: 24 },
  hyperlink: { color: COLORS.blue, textDecorationLine: "underline" },
});

export default SignUpOTPVerificationScreen;
