import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type SignUpNavigatorParamList = {
  SignUpPhoneNumberScreen: undefined;
  SignUpOTPVerificationScreen: undefined;
  SignUpEmailScreen: undefined;
  SignUpEmailVerificationScreen: undefined;
  SignUpNameScreen: undefined;
  SignUpAboutMeScreen: undefined;
};

export type SignUpNavProps<T extends keyof SignUpNavigatorParamList> = {
  navigation: NativeStackNavigationProp<SignUpNavigatorParamList, T>;
  route: RouteProp<SignUpNavigatorParamList, T>;
};
