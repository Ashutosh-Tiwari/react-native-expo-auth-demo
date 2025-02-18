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
import { sendEmailOtpAction } from "src/redux/user/userActions";
import { AppDispatch } from "src/redux/store";
import { showErrorToast, showSuccessToast } from "src/utils/toast";
import { setEmail } from "src/redux/user/userSlice";
import { REDUX_CONST } from "constants/strings";

interface FormikData {
  email: string;
}

const schema = yup.object({
  email: emailSchema,
});

const SignUpEmailScreen = ({
  navigation,
}: SignUpNavProps<"SignUpEmailScreen">) => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik<FormikData>({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      dispatch(setEmail(values.email));
      const resultAction = await dispatch(sendEmailOtpAction(values.email));
      if (sendEmailOtpAction.fulfilled.match(resultAction)) {
        showSuccessToast(
          "success",
          resultAction.payload.message ?? REDUX_CONST.OTP_SENT_EMAIL
        );
        navigation.navigate("SignUpEmailVerificationScreen");
      } else if (sendEmailOtpAction.rejected.match(resultAction)) {
        const errorMessage =
          resultAction.payload?.message || REDUX_CONST.SEND_OTP_FAILED;
        showErrorToast("Error", errorMessage);
      }
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
        loading={formik.isSubmitting}
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
