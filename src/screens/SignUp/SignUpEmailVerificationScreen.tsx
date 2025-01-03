import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import ScreenWrapper from "components/ScreenWrapper";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import React from "react";
import { StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { codeSchema } from "src/utils/validationSchemas";

interface FormikData {
  code: string;
}

const schema = yup.object({
  code: codeSchema,
});

const SignUpEmailVerificationScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpEmailVerificationScreen">) => {
  const formik = useFormik<FormikData>({
    initialValues: {
      code: "",
    },
    validationSchema: schema,
    onSubmit: async () => {
      // TODO: API for OTP verify
      navigation.navigate("SignUpNameScreen");
    },
  });

  return (
    <ScreenWrapper>
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
      <CustomButton
        title="Next"
        style={styles.button}
        onPress={formik.handleSubmit}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 24, marginTop: "40%" },
});

export default SignUpEmailVerificationScreen;
