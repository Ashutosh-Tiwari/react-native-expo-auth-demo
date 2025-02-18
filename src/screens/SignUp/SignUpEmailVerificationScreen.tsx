import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import ScreenWrapper from "components/ScreenWrapper";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import React from "react";
import { StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { codeSchema } from "src/utils/validationSchemas";
import { verifyEmailOtpAction } from "src/redux/user/userActions";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "src/redux/store";
import { useSelector } from "react-redux";
import { showErrorToast, showSuccessToast } from "src/utils/toast";
import { REDUX_CONST } from "constants/strings";

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
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector((state: RootState) => state.user.email);

  const formik = useFormik<FormikData>({
    initialValues: {
      code: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const resultAction = await dispatch(
        verifyEmailOtpAction({ email, otp: values.code })
      );
      if (verifyEmailOtpAction.fulfilled.match(resultAction)) {
        showSuccessToast(
          "success",
          resultAction.payload.message ?? REDUX_CONST.EMAIL_VERIFIED
        );
        navigation.navigate("SignUpNameScreen");
      } else if (verifyEmailOtpAction.rejected.match(resultAction)) {
        const errorMessage =
          resultAction.payload?.message || REDUX_CONST.OTP_VERIFY_FAILED;
        showErrorToast("Error", errorMessage);
      }
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

export default SignUpEmailVerificationScreen;
