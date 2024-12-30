import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootNavProps } from "../navigation/Routing/paramList";
import { StatusBar } from "expo-status-bar";
import CustomButton from "components/CustomButton";

const GetStartedScreen = ({ navigation }: RootNavProps<"GetStarted">) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Get Started</Text>
      <Text style={styles.text}>
        By signing up or creating account, you agree to our terms and policies.
      </Text>
      <CustomButton
        title="Create Account"
        onPress={() => {
          navigation.navigate("SignUpNavigator", {
            screen: "SignUpPhoneNumberScreen",
          });
        }}
      />
      <CustomButton
        title="Sign In"
        onPress={() =>
          navigation.navigate("SignInNavigator", {
            screen: "SignInPhoneNumberScreen",
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default GetStartedScreen;
