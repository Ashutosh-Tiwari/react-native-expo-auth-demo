import React from "react";
import { Text, StyleSheet } from "react-native";
import { RootNavProps } from "../navigation/Routing/paramList";
import ScreenWrapper from "components/ScreenWrapper";

const WelcomeScreen = ({
  navigation,
  route,
}: RootNavProps<"WelcomeScreen">) => {
  const { firstName, phoneNumber, email, location, hobbies, startSign } =
    route.params;
  return (
    <ScreenWrapper style={styles.container}>
      <Text>{`Good morning/evening FIRSTNAME\n`}</Text>
      <Text>Your phone number is: </Text>
      <Text>Your phone number is: </Text>
      <Text>Your email is: </Text>
      <Text>You are located in </Text>
      <Text>Your hobbies are </Text>
      <Text>Your start sign is </Text>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
