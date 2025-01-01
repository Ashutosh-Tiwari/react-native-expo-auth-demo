import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { useTheme } from "@react-navigation/native";
import DEFAULT_THEME from "constants/theme";
import COLORS from "constants/color";

const CustomInput: React.FC<TextInputProps> = (props) => {
  const { components } = useTheme() as typeof DEFAULT_THEME;

  return (
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
