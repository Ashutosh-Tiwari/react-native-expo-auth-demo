import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUpNavigatorParamList } from "./paramList";
import SignUpPhoneNumberScreen from "screens/SignUp/SignUpPhoneNumberScreen";
import SignUpOTPVerificationScreen from "screens/SignUp/SignUpOTPVerificationScreen";
import SignUpEmailScreen from "screens/SignUp/SignUpEmailScreen";
import SignUpEmailVerificationScreen from "screens/SignUp/SignUpEmailVerificationScreen";
import SignUpAboutMeScreen from "screens/SignUp/SignUpAboutMeScreen";
import SignUpNameScreen from "screens/SignUp/SignUpNameScreen";
import COLORS from "constants/color";
import SvgArrowBack from "assets/svg/arrow_back.svg";

const Stack = createNativeStackNavigator<SignUpNavigatorParamList>();

const SignUpNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.background },
        headerShadowVisible: false,
      }}
      initialRouteName="SignUpPhoneNumberScreen"
    >
      <Stack.Screen
        name="SignUpPhoneNumberScreen"
        component={SignUpPhoneNumberScreen}
        options={{
          headerTitle: "Enter your phone number",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="SignUpOTPVerificationScreen"
        component={SignUpOTPVerificationScreen}
        options={{
          headerTitle: "Enter your code",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="SignUpEmailScreen"
        component={SignUpEmailScreen}
        options={{
          headerTitle: "Enter your email",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="SignUpEmailVerificationScreen"
        component={SignUpEmailVerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpNameScreen"
        component={SignUpNameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpAboutMeScreen"
        component={SignUpAboutMeScreen}
        options={{
          headerShown: true,
          title: "About me",
        }}
      />
    </Stack.Navigator>
  );
};

export default SignUpNavigator;
