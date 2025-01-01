// src/components/CustomInput.tsx
import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { useTheme } from "@react-navigation/native";
import DEFAULT_THEME from "constants/theme";

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
          borderRadius: components.input.borderRadius,
          padding: components.input.padding,
        },
      ]}
      placeholderTextColor={components.input.textColor}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 16,
  },
});

export default CustomInput;
