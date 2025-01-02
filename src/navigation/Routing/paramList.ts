import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { SignUpNavigatorParamList } from "../SignUp/paramList";
import { SignInNavigatorParamList } from "../SignIn/paramList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootNavigatorParamList = {
  GetStartedScreen: undefined;
  SignUpNavigator: NavigatorScreenParams<SignUpNavigatorParamList>;
  SignInNavigator: NavigatorScreenParams<SignInNavigatorParamList>;
  WelcomeScreen: {
    firstName: string;
    phoneNumber: string;
    email: string;
    hobbies: string[];
    startSign: string;
  };
};

export type RootNavProps<T extends keyof RootNavigatorParamList> = {
  navigation: NativeStackNavigationProp<RootNavigatorParamList, T>;
  route: RouteProp<RootNavigatorParamList, T>;
};
