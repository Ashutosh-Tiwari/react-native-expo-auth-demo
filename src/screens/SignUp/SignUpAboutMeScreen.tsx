import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import CustomButton from "components/CustomButton";
import {
  UserAboutModel,
  arrayOfUserInterests,
  arrayOfUserSigns,
} from "constants/data";
import COLORS from "constants/color";
import ScreenWrapper from "components/ScreenWrapper";

type ABOUT_ME = "interests" | "signs";

const SignUpAboutMeScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpAboutMeScreen">) => {
  const [selectedInterests, setSelectedInterests] = useState<number[]>([]);
  const [selectedSign, setSelectedSign] = useState<number | null>(null);

  const renderSectionUIs = (sectionTitle: string) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitleText}>{sectionTitle}</Text>
      </View>
    );
  };

  const handleItemPress = (type: ABOUT_ME, id: number) => {
    if (type === "interests") {
      setSelectedInterests((prev) =>
        prev.includes(id)
          ? prev.filter((interestId) => interestId !== id)
          : [...prev, id]
      );
    } else if (type === "signs") {
      setSelectedSign(id);
    }
  };

  const renderListItemUIs = (item: UserAboutModel, type: ABOUT_ME) => {
    const isSelected =
      (type === "interests" && selectedInterests.includes(item.id)) ||
      (type === "signs" && selectedSign === item.id);

    return (
      <Pressable
        key={item.id.toString()}
        style={[
          styles.listItemContainer,
          isSelected && { backgroundColor: COLORS.primary },
        ]}
        onPress={() => handleItemPress(type, item.id)}
      >
        <Text style={styles.listItemText}>{item.name}</Text>
      </Pressable>
    );
  };

  const renderListUIs = (
    data: UserAboutModel[],
    numOfColumns: number,
    type: ABOUT_ME
  ) => {
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        horizontal={false}
        keyExtractor={({ id }) => id.toString()}
        numColumns={numOfColumns}
        scrollEnabled={false}
        renderItem={({ item }) => renderListItemUIs(item, type)}
      />
    );
  };

  const handleNext = () => {
    navigation.getParent()?.reset({
      index: 0,
      routes: [
        {
          name: "WelcomeScreen",
          params: {
            firstName: "Paresh Mayani",
            phoneNumber: "0123456789",
            email: "paresh.mayani@solguruz.com",
            hobbies: selectedInterests.map(
              (id) => arrayOfUserInterests.find((item) => item.id === id)?.name
            ),
            startSign: arrayOfUserSigns.find((item) => item.id === selectedSign)
              ?.name,
          },
        },
      ],
    });
  };

  return (
    <ScreenWrapper style={styles.container}>
      {renderSectionUIs("My interests")}
      {renderListUIs(arrayOfUserInterests, 4, "interests")}
      {renderSectionUIs("My star sign")}
      {renderListUIs(arrayOfUserSigns, 4, "signs")}
      <CustomButton
        style={styles.button}
        title="Next"
        onPress={handleNext}
        disabled={selectedInterests.length === 0 || !selectedSign}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: { flex: 0 },
  sectionContainer: {
    marginVertical: 8,
  },
  sectionTitleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  list: {
    marginHorizontal: 16,
  },
  listItemContainer: {
    marginHorizontal: 4,
    marginVertical: 4,
    backgroundColor: COLORS.capsulePink,
    borderRadius: 10,
  },
  listItemText: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  button: { marginHorizontal: 24, marginTop: 24 },
});

export default SignUpAboutMeScreen;
