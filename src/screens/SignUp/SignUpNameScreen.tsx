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
import { addNameAction } from "src/redux/user/userActions";
import { AppDispatch } from "src/redux/store";
import { showErrorToast, showSuccessToast } from "src/utils/toast";
import { REDUX_CONST } from "constants/strings";

interface FormikData {
  name: string;
}

const schema = yup.object({
  name: nameSchema,
});
const SignUpNameScreen = ({
  navigation,
}: SignUpNavProps<"SignUpNameScreen">) => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik<FormikData>({
    initialValues: {
      name: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const resultAction = await dispatch(addNameAction(values.name));
      if (addNameAction.fulfilled.match(resultAction)) {
        showSuccessToast(
          "success",
          resultAction.payload.message ?? REDUX_CONST.NAME_ADDED
        );
        navigation.navigate("SignUpAboutMeScreen");
      } else if (addNameAction.rejected.match(resultAction)) {
        const errorMessage =
          resultAction.payload?.message || REDUX_CONST.NAME_ADD_FAILED;
        showErrorToast("Error", errorMessage);
      }
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

export default SignUpNameScreen;
