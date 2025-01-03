import React from "react";
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import DEFAULT_THEME from "constants/theme";
import COLORS from "constants/color";
import InputHelperText from "./InputHelperText";

export interface CustomTextInput extends TextInputProps {
  outerContainerStyle?: StyleProp<ViewStyle>;
  label?: string;
  textInputStyle?: StyleProp<TextStyle>;
  helperText?: string;
  helperTextStyle?: StyleProp<TextStyle>;
  error?: boolean;
}

const CustomInput: React.FC<CustomTextInput> = (props) => {
  const { components } = useTheme() as typeof DEFAULT_THEME;
  const { helperText, error } = props;
  return (
    <View>
      <TextInput
        style={{
          color: components.input.textColor,
          borderColor: components.input.borderColor,
          padding: components.input.padding,
          fontSize: 16,
          width: "100%",
          borderBottomWidth: 1,
        }}
        {...props}
        placeholderTextColor={COLORS.input_placeholder_gray}
      />
      {helperText && (
        <InputHelperText
          helperTextStyle={props.helperTextStyle}
          text={helperText}
          error={!!error}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    width: "100%",
    borderBottomWidth: 1,
    color: COLORS.black,
  },
});

export default CustomInput;
