import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import CustomButton from "components/CustomButton";
import { arrayOfUserInterests, arrayOfUserSigns } from "constants/data";
import COLORS from "constants/color";
import ScreenWrapper from "components/ScreenWrapper";
import { useGeolocation } from "src/hooks/useGeoLocation";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/redux/store";
import { useDispatch } from "react-redux";
import { setInterests, setStarSign } from "src/redux/user/userSlice";
import { UserAboutModel } from "navigation/Routing/paramList";
import { showErrorToast } from "src/utils/toast";

type ABOUT_ME = "interests" | "signs";

const SignUpAboutMeScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpAboutMeScreen">) => {
  const { fetchLocation, loading } = useGeolocation();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  const selectedInterests = useSelector(
    (state: RootState) => state.user.interests
  );
  const selectedSign = useSelector((state: RootState) => state.user.starSign);

  const renderSectionUIs = (sectionTitle: string) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitleText}>{sectionTitle}</Text>
      </View>
    );
  };

  const handleItemPress = (type: ABOUT_ME, id: number) => {
    if (type === "interests") {
      const interests = arrayOfUserInterests.find(
        (interest) => interest.id === id
      );
      if (interests) {
        const updatedInterests = selectedInterests.some(
          (interest) => interest.id === id
        )
          ? selectedInterests.filter((interest) => interest.id !== id)
          : [...selectedInterests, interests];

        dispatch(setInterests(updatedInterests));
      }
    } else if (type === "signs") {
      const selectedSignData = arrayOfUserSigns.find((sign) => sign.id === id);

      if (selectedSignData) {
        dispatch(setStarSign(selectedSignData));
      }
    }
  };

  const renderListItemUIs = (item: UserAboutModel, type: ABOUT_ME) => {
    const isSelected =
      (type === "interests" &&
        selectedInterests.some((interest) => interest.id === item.id)) ||
      (type === "signs" && selectedSign.id === item.id);

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

  const handleNext = async () => {
    try {
      const location = await fetchLocation();
      navigation.getParent()?.reset({
        index: 0,
        routes: [
          {
            name: "WelcomeScreen",
            params: {
              firstName: user.name,
              phoneNumber: user.mobile,
              email: user.email,
              location,
              hobbies: selectedInterests.map((hobby) => hobby.name).join(", "),
              startSign: selectedSign.name,
            },
          },
        ],
      });
    } catch (error: any) {
      console.error(error.message);
      showErrorToast("Error", error.message);
    }
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
        loading={loading}
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
