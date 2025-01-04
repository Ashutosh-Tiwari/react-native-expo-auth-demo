import { CompositeScreenProps, RouteProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "navigation/Routing/paramList";

export type SignInNavigatorParamList = {
  SignInPhoneNumberScreen: undefined;
  SignInOTPVerificationScreen: undefined;
};

export type SignInNavProps<T extends keyof SignInNavigatorParamList> = {
  navigation: NativeStackNavigationProp<SignInNavigatorParamList, T>;
  route: RouteProp<SignInNavigatorParamList, T>;
};

export type SignInCompositeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<
    SignInNavigatorParamList,
    "SignInOTPVerificationScreen"
  >,
  NativeStackScreenProps<RootNavigatorParamList>
>;
