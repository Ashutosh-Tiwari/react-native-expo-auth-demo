import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "./paramList";
import GetStartedScreen from "screens/GetStartedScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignInNavigator from "../SignIn";
import SignUpNavigator from "navigation/SignUp";
import DEFAULT_THEME from "constants/theme";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Routing = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DEFAULT_THEME}>
        <Stack.Navigator>
          <Stack.Screen
            name="GetStarted"
            component={GetStartedScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignInNavigator" component={SignInNavigator} />
          <Stack.Screen name="SignUpNavigator" component={SignUpNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routing;
