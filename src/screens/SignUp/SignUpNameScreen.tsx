import { SignInNavProps } from "navigation/SignIn/paramList";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

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
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={handleNameChange}
        placeholder="Name"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default SignUpNameScreen;
