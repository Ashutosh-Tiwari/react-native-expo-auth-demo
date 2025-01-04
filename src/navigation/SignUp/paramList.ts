import { CompositeScreenProps, RouteProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "navigation/Routing/paramList";

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
