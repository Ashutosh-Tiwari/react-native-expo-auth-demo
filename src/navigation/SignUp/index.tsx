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
import SvgArrowBack from "../../../assets/svgs/arrow_back.svg";

const Stack = createNativeStackNavigator<SignUpNavigatorParamList>();

const HeaderLeft = ({ onPress }: { onPress: () => void }) => {
  return (
    <SvgArrowBack
      width={24}
      height={24}
      fill={COLORS.black}
      onPress={onPress}
    />
  );
};
const SignUpNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: COLORS.background },
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitleStyle: { fontWeight: "bold" },
        headerLeft: () => <HeaderLeft onPress={() => navigation.goBack()} />,
      })}
      initialRouteName="SignUpPhoneNumberScreen"
    >
      <Stack.Screen
        name="SignUpPhoneNumberScreen"
        component={SignUpPhoneNumberScreen}
        options={{
          headerTitle: "Enter your phone number",
        }}
      />
      <Stack.Screen
        name="SignUpOTPVerificationScreen"
        component={SignUpOTPVerificationScreen}
        options={{
          headerTitle: "Enter your code",
        }}
      />
      <Stack.Screen
        name="SignUpEmailScreen"
        component={SignUpEmailScreen}
        options={{
          headerTitle: "Enter your email",
        }}
      />
      <Stack.Screen
        name="SignUpEmailVerificationScreen"
        component={SignUpEmailVerificationScreen}
        options={{
          headerTitle: "Enter your code",
        }}
      />
      <Stack.Screen
        name="SignUpNameScreen"
        component={SignUpNameScreen}
        options={{
          headerTitle: "Enter first name",
        }}
      />
      <Stack.Screen
        name="SignUpAboutMeScreen"
        component={SignUpAboutMeScreen}
        options={{
          title: "About me",
        }}
      />
    </Stack.Navigator>
  );
};

export default SignUpNavigator;
