import CustomButton from "components/CustomButton";
import PhoneNumberInput from "components/PhoneNumberInput";
import React from "react";
import { StyleProp, Text, TextInputProps, TextStyle } from "react-native";

// TODO: To be used later to replacing the common UI enter phone number screen
interface PhoneInputComponentProps extends TextInputProps {
  helperText?: string;
  helperTextStyle?: StyleProp<TextStyle>;
  error?: boolean;
  onNextPress: () => void;
  onChangeText: (text: string) => void;
}

const PhoneInputComponent: React.FC<PhoneInputComponentProps> = ({
  onNextPress,
  onChangeText,
  helperTextStyle,
  value,
}) => {
  return (
    <>
      <PhoneNumberInput
        placeholder="Enter your phone number"
        code="US +1"
        value={value}
        maxLength={10}
        helperTextStyle={helperTextStyle}
        onChangeText={onChangeText}
        keyboardType="number-pad"
      />
      <Text>
        For security reasons, VoIP numbers cannot be used. Message and data
        rates may apply. Only US customers with US phone numbers are accepted at
        this time.
      </Text>

      <CustomButton
        title="Next"
        disabled={!value || value.length < 10}
        style={{ marginHorizontal: 24, marginTop: "10%" }}
        onPress={onNextPress}
      />
    </>
  );
};

export default PhoneInputComponent;
