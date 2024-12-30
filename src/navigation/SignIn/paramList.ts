import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type SignInNavigatorParamList = {
  SignInPhoneNumberScreen: undefined;
  SignInOTPVerificationScreen: undefined;
  SignInEmailScreen: undefined;
  SignInEmailVerificationScreen: undefined;
};

export type SignInNavProps<T extends keyof SignInNavigatorParamList> = {
  navigation: NativeStackNavigationProp<SignInNavigatorParamList, T>;
  route: RouteProp<SignInNavigatorParamList, T>;
};
