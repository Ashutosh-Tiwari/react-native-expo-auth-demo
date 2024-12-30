import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUpNavigatorParamList } from "./paramList";
import SignUpPhoneNumberScreen from "screens/SignUp/SignInPhoneNumberScreen";

const Stack = createNativeStackNavigator<SignUpNavigatorParamList>();

const SignUpNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignUpPhoneNumberScreen">
      <Stack.Screen
        name="SignUpPhoneNumberScreen"
        component={SignUpPhoneNumberScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SignUpNavigator;
