import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "./paramList";
import GetStartedScreen from "screens/GetStartedScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignInNavigator from "../SignIn";
import SignUpNavigator from "navigation/SignUp";
import DEFAULT_THEME from "constants/theme";
import WelcomeScreen from "screens/WelcomeScreen";
import SvgArrowBack from "../../../assets/svgs/arrow_back.svg";
import COLORS from "constants/color";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

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

const Routing = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DEFAULT_THEME}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
          <Stack.Screen name="SignUpNavigator" component={SignUpNavigator} />
          <Stack.Screen name="SignInNavigator" component={SignInNavigator} />
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{
              headerShown: true,
              headerTitle: "Welcome",
              headerShadowVisible: false,
              headerBackVisible: false,
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </SafeAreaProvider>
  );
};

export default Routing;
