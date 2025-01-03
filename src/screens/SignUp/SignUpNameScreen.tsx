import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import ScreenWrapper from "components/ScreenWrapper";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import React from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { nameSchema } from "src/utils/validationSchemas";
import { setName } from "src/redux/user/userSlice";

interface FormikData {
  name: string;
}

const schema = yup.object({
  name: nameSchema,
});
const SignUpNameScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpNameScreen">) => {
  const dispatch = useDispatch();

  const formik = useFormik<FormikData>({
    initialValues: {
      name: "",
    },
    validationSchema: schema,
    onSubmit: async () => {
      dispatch(setName(formik.values.name));
      // TODO: API for OTP verify
      navigation.navigate("SignUpAboutMeScreen");
    },
  });

  return (
    <ScreenWrapper>
      <CustomInput
        placeholder="Enter first name"
        value={formik.values.name}
        onChangeText={formik.handleChange("name")}
        onBlur={formik.handleBlur("name")}
        error={!!(formik.touched.name && formik.errors.name)}
        helperText={
          formik.touched.name && formik.errors.name
            ? formik.errors.name
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

export default SignUpNameScreen;
