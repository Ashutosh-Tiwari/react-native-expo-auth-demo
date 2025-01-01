import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import ScreenWrapper from "components/ScreenWrapper";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import React from "react";
import { StyleSheet } from "react-native";

const SignUpNameScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpNameScreen">) => {
  const [name, setName] = React.useState("");

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleSubmit = () => {
    navigation.navigate("SignUpAboutMeScreen");
  };

  return (
    <ScreenWrapper>
      <CustomInput
        value={name}
        onChangeText={handleNameChange}
        placeholder="Enter first name"
      />
      <CustomButton title="Next" style={styles.button} onPress={handleSubmit} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 24, marginTop: 24 },
});

export default SignUpNameScreen;
