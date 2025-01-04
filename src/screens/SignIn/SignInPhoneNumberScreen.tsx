import React from "react";
import { StyleSheet, Text } from "react-native";
import { SignInNavProps } from "../../navigation/SignIn/paramList";
import ScreenWrapper from "components/ScreenWrapper";
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "src/redux/user/userSlice";
import { useFormik } from "formik";
import * as yup from "yup";
import { phoneNumberSchema } from "src/utils/validationSchemas";
import { sendOtpAction } from "src/redux/user/userActions";
import { AppDispatch } from "src/redux/store";
import { showErrorToast, showSuccessToast } from "src/utils/toast";
import CustomButton from "components/CustomButton";
import PhoneNumberInput from "components/PhoneNumberInput";
import { REDUX_CONST } from "constants/strings";

interface FormikData {
  phoneNumber: string;
}

const schema = yup.object({
  phoneNumber: phoneNumberSchema,
});

const SignInPhoneNumberScreen = ({
  navigation,
}: SignInNavProps<"SignInPhoneNumberScreen">) => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik<FormikData>({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      dispatch(setPhoneNumber(values.phoneNumber));
      const resultAction = await dispatch(sendOtpAction(values.phoneNumber));
      if (sendOtpAction.fulfilled.match(resultAction)) {
        showSuccessToast(
          "success",
          resultAction.payload.message ?? "OTP sent successfully - 123456"
        );
        navigation.navigate("SignInOTPVerificationScreen");
      } else if (sendOtpAction.rejected.match(resultAction)) {
        const errorMessage =
          resultAction.payload?.message || REDUX_CONST.SEND_OTP_FAILED;
        showErrorToast("Error", errorMessage);
      }
    },
  });

  return (
    <ScreenWrapper style={styles.container}>
      <PhoneNumberInput
        placeholder="Enter your phone number"
        code="US +1"
        value={formik.values.phoneNumber}
        onChangeText={formik.handleChange("phoneNumber")}
        keyboardType="number-pad"
        onBlur={formik.handleBlur("phoneNumber")}
        maxLength={10}
        error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
        helperText={
          formik.touched.phoneNumber && formik.errors.phoneNumber
            ? formik.errors.phoneNumber
            : undefined
        }
      />
      <Text>
        For security reasons, VoIP numbers cannot be used. Message and data
        rates may apply. Only US customers with US phone numbers are accepted at
        this time.
      </Text>

      <CustomButton
        title="Next"
        disabled={
          !formik.isValid ||
          formik.isSubmitting ||
          (!formik.dirty && formik.isValid)
        }
        loading={formik.isSubmitting}
        style={{ marginHorizontal: 24, marginTop: "10%" }}
        onPress={formik.handleSubmit}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
  },
});

export default SignInPhoneNumberScreen;
