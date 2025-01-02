import CustomButton from "components/CustomButton";
import PhoneNumberInput from "components/PhoneNumberInput";
import React from "react";
import { Text } from "react-native";

const PhoneInputComponent: React.FC<{ onPress: () => void }> = ({
  onPress,
}) => {
  return (
    <>
      <PhoneNumberInput
        placeholder="Enter your phone number"
        code="US +1"
        keyboardType="number-pad"
      />
      <Text>
        For security reasons, VoIP numbers cannot be used. Message and data
        rates may apply. Only US customers with US phone numbers are accepted at
        this time.
      </Text>

      <CustomButton
        title="Next"
        style={{ marginHorizontal: 24, marginTop: "10%" }}
        onPress={onPress}
      />
    </>
  );
};

export default PhoneInputComponent;
