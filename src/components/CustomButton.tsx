import { useTheme } from "@react-navigation/native";
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
  const { backgroundColor, borderRadius, padding } = components.button;

  return (
    <TouchableOpacity
      style={[{ backgroundColor, borderRadius, padding }, styles.button, style]}
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
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default CustomButton;
