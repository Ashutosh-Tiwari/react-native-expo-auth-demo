import React from "react";
import { Text, StyleSheet } from "react-native";
import { RootNavProps } from "../navigation/Routing/paramList";
import ScreenWrapper from "components/ScreenWrapper";
import { useGeolocation } from "src/hooks/useGeoLocation";

const WelcomeScreen = ({
  navigation,
  route,
}: RootNavProps<"WelcomeScreen">) => {
  const { firstName, phoneNumber, email, hobbies, startSign } = route.params;
  // TODO: fetch geo location

  return (
    <ScreenWrapper style={styles.container}>
      <Text>{`Good morning ${firstName ?? "first name"}\n`}</Text>
      <Text>{`Your phone number is: ${phoneNumber ?? "phone"}`}</Text>
      <Text>{`Your email is: ${email ?? "email"}`}</Text>
      <Text>{`You are located in India`}</Text>
      <Text>{`Your hobbies are  ${hobbies.toString() ?? "hobbies"}`}</Text>
      <Text>{`Your start sign is ${startSign ?? "star sign"}`}</Text>
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
