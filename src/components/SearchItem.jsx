import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { HeaderText } from "./HeaderText";
import { sizes } from "../utils/sizes";

export const SearchItem = ({ item }) => {
  return (
    <Card style={styles.searchItemContainer}>
      <Image source={{uri: item["thumbnail"]}} style={{height: 180, resizeMode: "contain"}} />
      <HeaderText size="8">{item["title"]}</HeaderText>
      <Text>Category: {item["category"]}</Text>
      <Text>Price: {item["price"]}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  searchItemContainer: {
    width: 185,
    height: 350,
    padding: sizes.sma
  }
});

export default SearchItem;