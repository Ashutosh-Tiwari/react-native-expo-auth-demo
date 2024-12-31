import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootNavProps } from "../navigation/Routing/paramList";
import { StatusBar } from "expo-status-bar";
import CustomButton from "components/CustomButton";

const GetStartedScreen = ({ navigation }: RootNavProps<"GetStarted">) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textBold}>Get Started</Text>
      <Text style={styles.text}>
        By signing up or creating account, you agree to our terms and policies.
      </Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Create account"
          onPress={() => {
            navigation.navigate("SignUpNavigator", {
              screen: "SignUpPhoneNumberScreen",
            });
          }}
        />
        <CustomButton
          title="Sign in"
          onPress={() =>
            navigation.navigate("SignInNavigator", {
              screen: "SignInPhoneNumberScreen",
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 16,
  },
  buttonContainer: {
    gap: 18,
  },
  text: {
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
  },
  textBold: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default GetStartedScreen;
