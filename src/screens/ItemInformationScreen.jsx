import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderText } from "../components/HeaderText";
import { StarRating } from "../components/StarRating";

export const ItemInformationScreen = ({ route, items }) => {
  const { itemId } = route.params;
  const itemInformation = items.filter(item => 
    item["id"] == itemId
  )[0];

  return (
    <ScrollView style={styles.itemInformationContainer}>
      <HeaderText size="3">{itemInformation["title"]}</HeaderText>
      <StarRating rating={itemInformation["rating"]} textSize="20" />
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
