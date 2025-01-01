import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SignUpNavProps } from "navigation/SignUp/paramList";
import CustomButton from "components/CustomButton";
import {
  UserAboutModel,
  arrayOfUserInterests,
  arrayOfUserSigns,
} from "constants/data";

const SignUpAboutMeScreen = ({
  navigation,
  route,
}: SignUpNavProps<"SignUpAboutMeScreen">) => {
  const renderSectionUIs = (sectionTitle: string) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitleText}>{sectionTitle}</Text>
      </View>
    );
  };

  const renderListItemUIs = (item: UserAboutModel) => {
    return (
      <View key={item.id.toString()} style={styles.listItemContainer}>
        <Text style={styles.listItemText}>{item.name}</Text>
      </View>
    );
  };

  const renderListUIs = (data: UserAboutModel[]) => {
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        keyExtractor={({ id }) => id.toString()}
        horizontal
        scrollEnabled={false}
        renderItem={({ item }) => renderListItemUIs(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderSectionUIs("My interests")}
      {renderListUIs(arrayOfUserInterests)}
      {renderSectionUIs("My star sign")}
      {renderListUIs(arrayOfUserSigns)}
      <CustomButton style={styles.button} title="Next" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  sectionContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  list: {
    flex: 1,
    marginHorizontal: 16,
    flexWrap: "wrap",
  },
  listItemContainer: {
    marginHorizontal: 4,
    marginVertical: 4,
    backgroundColor: "pink",
    borderRadius: 10,
  },
  listItemText: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  button: {
    margin: 16,
  },
});

export default SignUpAboutMeScreen;
