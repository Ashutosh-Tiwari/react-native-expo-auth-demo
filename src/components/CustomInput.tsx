import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { useTheme } from "@react-navigation/native";
import DEFAULT_THEME from "constants/theme";
import COLORS from "constants/color";

const CustomInput: React.FC<TextInputProps> = (props) => {
  const { components } = useTheme() as typeof DEFAULT_THEME;

  return (
    <TextInput
      style={[
        styles.input,
        {
          backgroundColor: components.input.backgroundColor,
          color: components.input.textColor,
          borderColor: components.input.borderColor,
          padding: components.input.padding,
        },
      ]}
      {...props}
      placeholderTextColor={COLORS.input_placeholder_gray}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 16,
    width: "100%",
    borderRadius: 14,
  },
});

export default CustomInput;
