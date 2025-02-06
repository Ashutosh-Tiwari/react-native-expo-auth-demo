import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInNavigatorParamList } from "./paramList";
import SignInPhoneNumberScreen from "../../screens/SignIn/SignInPhoneNumberScreen";
import SignInOTPVerificationScreen from "../../screens/SignIn/SignInOTPVerificationScreen";
import COLORS from "constants/color";
import HeaderBack from "components/HeaderBack";

const Stack = createNativeStackNavigator<SignInNavigatorParamList>();

const SignInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: COLORS.background },
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitleStyle: { fontWeight: "bold" },
        headerLeft: () => <HeaderBack onPress={() => navigation.goBack()} />,
      })}
      initialRouteName="SignInPhoneNumberScreen"
    >
      <Stack.Screen
        name="SignInPhoneNumberScreen"
        component={SignInPhoneNumberScreen}
        options={{
          headerTitle: "Enter your phone number",
        }}
      />
      <Stack.Screen
        name="SignInOTPVerificationScreen"
        component={SignInOTPVerificationScreen}
        options={{
          headerTitle: "Enter your code",
        }}
      />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
