import COLORS from "constants/color";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
  barColor?: string;
  barStyle?: StatusBarStyle | null | undefined;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  style,
  barColor,
  barStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <StatusBar
        style={barStyle || "auto"}
        backgroundColor={barColor || COLORS.background}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
  },
});

export default ScreenWrapper;
