import React from "react";
import { StyleSheet } from "react-native";
import { SignInCompositeScreenProps } from "../../navigation/SignIn/paramList";
import CustomInput from "components/CustomInput";
import CustomButton from "components/CustomButton";
import ScreenWrapper from "components/ScreenWrapper";
import * as yup from "yup";
import { codeSchema } from "src/utils/validationSchemas";
import { verifyOtpAction } from "src/redux/user/userActions";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "src/redux/store";
import { useSelector } from "react-redux";
import { showErrorToast, showSuccessToast } from "src/utils/toast";
import { useFormik } from "formik";
import { useGeolocation } from "src/hooks/useGeoLocation";
interface FormikData {
  code: string;
}

const schema = yup.object({
  code: codeSchema,
});

const SignInOTPVerificationScreen = ({
  navigation,
}: SignInCompositeScreenProps) => {
  const { fetchLocation, loading, error } = useGeolocation();
  const dispatch = useDispatch<AppDispatch>();
  const mobile = useSelector((state: RootState) => state.user.mobile);

  const formik = useFormik<FormikData>({
    initialValues: {
      code: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const resultAction = await dispatch(
        verifyOtpAction({ mobile, otp: values.code })
      );

      if (verifyOtpAction.fulfilled.match(resultAction)) {
        if (!resultAction.payload?.userDetails?.email) {
          showErrorToast(
            "Error",
            "User not registered, continue with registration."
          );
          navigation.navigate("SignUpNavigator", {
            screen: "SignUpEmailScreen",
          });
        } else {
          const userDetails = resultAction.payload.userDetails;
          const location = await fetchLocation();
          showSuccessToast(
            "success",
            resultAction.payload.message ??
              "Your OTP verified and updated successfully."
          );
          navigation.getParent()?.reset({
            index: 0,
            routes: [
              {
                name: "WelcomeScreen",
                params: {
                  firstName: userDetails.name,
                  phoneNumber: userDetails.mobile,
                  email: userDetails.email,
                  location,
                  hobbies: "not set yet",
                  startSign: "not set yet",
                },
              },
            ],
          });
        }
      } else {
        showErrorToast("Error", "Invalid OTP.");
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
        loading={formik.isSubmitting || loading}
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

export default SignInOTPVerificationScreen;
