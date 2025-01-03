import COLORS from "constants/color";
import { useMemo } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

export interface InputHelperTextProps {
  text: string;
  error?: boolean;
  style?: TextStyle;
  helperTextStyle?: StyleProp<TextStyle>;
}

export default function InputHelperText(props: InputHelperTextProps) {
  const styles = useMemo(() => {
    return StyleSheet.create({
      helper_text: {
        color: props.error ? COLORS.error : COLORS.black,
        paddingHorizontal: 16,
        alignSelf: "flex-start",
        marginTop: 8,
        fontSize: 12,
      },
    });
  }, [props.error]);

  return (
    <Text style={[styles.helper_text, props.helperTextStyle]}>
      {props.text}
    </Text>
  );
}
