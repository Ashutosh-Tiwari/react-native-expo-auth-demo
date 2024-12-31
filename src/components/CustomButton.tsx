import { useTheme } from "@react-navigation/native";
import COLORS from "constants/color";
import DEFAULT_THEME from "constants/theme";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
  textStyle?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  const { components, colors } = useTheme() as typeof DEFAULT_THEME;

  return (
    <TouchableOpacity
      style={[{ ...components.button }, styles.button, style]}
      onPress={onPress}
    >
      <Text style={[{ color: colors.text }, styles.buttonText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    borderColor: COLORS.border,
    fontWeight: "700",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
