import CustomButton from "components/CustomButton";
import PhoneNumberInput from "components/PhoneNumberInput";
import React from "react";
import { Text, TextInputProps } from "react-native";

interface PhoneInputComponentProps extends TextInputProps {
  onNextPress: () => void;
  onChangeText: (text: string) => void;
}

const PhoneInputComponent: React.FC<PhoneInputComponentProps> = ({
  onNextPress,
  onChangeText,
  value,
}) => {
  return (
    <>
      <PhoneNumberInput
        placeholder="Enter your phone number"
        code="US +1"
        value={value}
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
        // disabled={!value || value.length < 10}
        style={{ marginHorizontal: 24, marginTop: "10%" }}
        onPress={onNextPress}
      />
    </>
  );
};

export default PhoneInputComponent;
