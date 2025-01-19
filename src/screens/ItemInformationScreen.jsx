import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderText } from "../components/HeaderText";

export const ItemInformationScreen = ({ route, items }) => {
  const { itemId } = route.params;
  const itemInformation = items.filter(item => 
    item["id"] == itemId
  )[0];

  return (
    <ScrollView style={styles.itemInformationContainer}>
      <HeaderText size="3">{itemInformation["title"]}</HeaderText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemInformationContainer: {
    marginHorizontal: 10,
    marginVertical: 15
  }
});

export default ItemInformationScreen;
