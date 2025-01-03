import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import ScreenWrapper from "components/ScreenWrapper";
import { useFormik } from "formik";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import React from "react";
import { StyleSheet } from "react-native";
import * as yup from "yup";
import { emailSchema } from "src/utils/validationSchemas";
import { useDispatch } from "react-redux";
import { setEmail } from "src/redux/user/userSlice";

interface FormikData {
  email: string;
}

const schema = yup.object({
  email: emailSchema,
});

const SignUpEmailScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpEmailScreen">) => {
  const dispatch = useDispatch();

  const formik = useFormik<FormikData>({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: async () => {
      dispatch(setEmail(formik.values.email));
      // TODO: send OTP API for email
      navigation.navigate("SignUpEmailVerificationScreen");
    },
  });

  return (
    <ScreenWrapper>
      <CustomInput
        placeholder="Enter your email"
        autoCorrect={false}
        autoCapitalize="none"
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
        keyboardType="email-address"
        error={!!(formik.touched.email && formik.errors.email)}
        helperText={
          formik.touched.email && formik.errors.email
            ? formik.errors.email
            : undefined
        }
      />
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
  button: { marginHorizontal: 24, marginTop: "40%" },
});

export default SignUpEmailScreen;
