import React, { useMemo } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import DEFAULT_THEME from "constants/theme";
import COLORS from "constants/color";
import { MobileInputProps } from "./interface";
import InputHelperText from "components/InputHelperText";

const PhoneNumberInput: React.FC<MobileInputProps> = (props) => {
  const theme = useTheme() as typeof DEFAULT_THEME;
  const { components } = theme;
  const { error, helperText, style, code, ...inputProps } = props;

  const styles = useMemo(() => {
    return StyleSheet.create({
      input: {
        fontSize: 16,
        textAlignVertical: "center",
        color: components.input.textColor,
        flexGrow: 1,
      },
      cotainer: {
        borderWidth: 1,
        borderColor: error ? COLORS.error : COLORS.primary,
        borderRadius: 8,
        paddingHorizontal: 14,
        flexDirection: "row",
        alignItems: "center",
        ...inputProps.outerStyle,
      },
      divider: {
        height: "100%",
        width: 1,
        marginHorizontal: 12,
        backgroundColor: COLORS.black,
      },
    });
  }, [components, error, inputProps.outerStyle]);

  return (
    <View>
      <View style={styles.cotainer}>
        <Text>{code}</Text>
        <View style={styles.divider} />
        <TextInput
          style={styles.input}
          {...inputProps}
          placeholderTextColor={COLORS.input_placeholder_gray}
        />
      </View>
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

export default PhoneNumberInput;
