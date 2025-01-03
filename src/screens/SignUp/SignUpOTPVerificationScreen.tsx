import React from "react";
import { Text, StyleSheet, Linking } from "react-native";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import ScreenWrapper from "components/ScreenWrapper";
import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import COLORS from "constants/color";
import { useFormik } from "formik";
import * as yup from "yup";
import { codeSchema } from "src/utils/validationSchemas";

interface FormikData {
  code: string;
}

const schema = yup.object({
  code: codeSchema,
});

const SignUpOTPVerificationScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpOTPVerificationScreen">) => {
  const formik = useFormik<FormikData>({
    initialValues: {
      code: "",
    },
    validationSchema: schema,
    onSubmit: async () => {
      // TODO: API for OTP verify
      navigation.navigate("SignUpEmailScreen");
    },
  });

  return (
    <ScreenWrapper style={styles.container}>
      <CustomInput
        placeholder="Enter your code"
        keyboardType="numeric"
        value={formik.values.code}
        onChangeText={formik.handleChange("code")}
        onBlur={formik.handleBlur("code")}
        maxLength={6}
        error={!!(formik.touched.code && formik.errors.code)}
        helperText={
          formik.touched.code && formik.errors.code
            ? formik.errors.code
            : undefined
        }
      />
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
        disabled={
          !formik.isValid ||
          formik.isSubmitting ||
          (!formik.dirty && formik.isValid)
        }
        onPress={formik.handleSubmit}
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
