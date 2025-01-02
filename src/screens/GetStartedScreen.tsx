import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootNavProps } from "../navigation/Routing/paramList";
import CustomButton from "components/CustomButton";
import ScreenWrapper from "components/ScreenWrapper";

const GetStartedScreen = ({ navigation }: RootNavProps<"GetStartedScreen">) => {
  return (
    <ScreenWrapper style={styles.container}>
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
            // navigation.navigate("WelcomeScreen", {
            //   firstName: "John",
            //   phoneNumber: "1234567890",
            //   email: "email",
            //   hobbies: ["Abc", "Def"],
            //   startSign: "Star sign",
            // });
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
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContainer: {
    gap: 18,
    width: "100%",
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
  },
  textBold: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginStart: 24,
  },
});

export default GetStartedScreen;
