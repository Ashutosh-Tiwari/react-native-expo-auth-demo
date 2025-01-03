import React from "react";
import { StyleSheet, Text } from "react-native";
import { SignUpNavProps } from "../../navigation/SignUp/paramList";
import ScreenWrapper from "components/ScreenWrapper";
import { useFormik } from "formik";
import { phoneNumberSchema } from "src/utils/validationSchemas";
import * as yup from "yup";
import PhoneNumberInput from "components/PhoneNumberInput";
import CustomButton from "components/CustomButton";

interface FormikData {
  phoneNumber: string;
}

const schema = yup.object({
  phoneNumber: phoneNumberSchema,
});

const SignUpPhoneNumberScreen = ({
  navigation,
}: SignUpNavProps<"SignUpPhoneNumberScreen">) => {
  const {
    values,
    touched,
    errors,
    isValid,
    isSubmitting,
    dirty,
    handleChange,
    handleBlur,
    setFieldTouched,
    setFieldError,
  } = useFormik<FormikData>({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: schema,
    onSubmit: () => {},
  });

  // TODO: Extract common phone number input UI into a separate component
  return (
    <ScreenWrapper style={styles.container}>
      {/* <PhoneInputComponent
        onNextPress={() => navigation.navigate("SignUpOTPVerificationScreen")}
        value={values.phoneNumber}
        onChangeText={handleChange("phoneNumber")}
        onBlur={handleBlur("phoneNumber")}
        onFocus={() => {
          setFieldError("phoneNumber", undefined);
          setFieldTouched("phoneNumber", false);
        }}
        error={!!(touched.phoneNumber && errors.phoneNumber)}
        helperText={"error"}
      /> */}

      <PhoneNumberInput
        placeholder="Enter your phone number"
        code="US +1"
        value={values.phoneNumber}
        onChangeText={handleChange("phoneNumber")}
        keyboardType="number-pad"
        onBlur={handleBlur("phoneNumber")}
        onFocus={() => {
          setFieldError("phoneNumber", undefined);
          setFieldTouched("phoneNumber", false);
        }}
        maxLength={10}
        error={!!(touched.phoneNumber && errors.phoneNumber)}
        helperText={
          touched.phoneNumber && errors.phoneNumber
            ? errors.phoneNumber
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
        disabled={!isValid || isSubmitting || (!dirty && isValid)}
        style={{ marginHorizontal: 24, marginTop: "10%" }}
        onPress={() => navigation.navigate("SignUpOTPVerificationScreen")}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
  },
});

export default SignUpPhoneNumberScreen;
