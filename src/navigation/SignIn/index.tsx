import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInNavigatorParamList } from "./paramList";
import SignInPhoneNumberScreen from "../../screens/SignIn/SignInPhoneNumberScreen";
import SignInOTPVerificationScreen from "../../screens/SignIn/SignInOTPVerificationScreen";
import SignInEmailVerificationScreen from "../../screens/SignIn/SignInEmailVerificationScreen";
import SignInEmailScreen from "screens/SignIn/SignInEmailScreen";

const Stack = createNativeStackNavigator<SignInNavigatorParamList>();

const SignInNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInPhoneNumberScreen"
        component={SignInPhoneNumberScreen}
      />
      <Stack.Screen
        name="SignInOTPVerificationScreen"
        component={SignInOTPVerificationScreen}
      />
      <Stack.Screen name="SignInEmailScreen" component={SignInEmailScreen} />
      <Stack.Screen
        name="SignInEmailVerificationScreen"
        component={SignInEmailVerificationScreen}
      />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
