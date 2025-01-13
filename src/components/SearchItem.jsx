import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { sizes } from "../utils/sizes";

export const SearchItem = ({ item }) => {
  return (
    <Card style={styles.searchItemContainer}>
      <Image source={{uri: item["thumbnail"]}} style={{height: 180, resizeMode: "contain"}} />
      <Text>Title: {item["title"]}</Text>
      <Text>Category: {item["category"]}</Text>
      <Text>Price: {item["price"]}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  searchItemContainer: {
    padding: sizes.smc
  }
});

export default SearchItem;