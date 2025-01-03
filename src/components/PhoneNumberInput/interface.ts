import { StyleProp, TextInputProps, TextStyle } from "react-native";

export interface MobileInputProps extends TextInputProps {
  error?: boolean;
  helperText?: string;
  code: string;
  outerStyle?: {};
  helperTextStyle?: StyleProp<TextStyle>;
}
