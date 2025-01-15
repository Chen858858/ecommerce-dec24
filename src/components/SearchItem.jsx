import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { HeaderText } from "./HeaderText";
import { StarRating } from "./StarRating";

export const SearchItem = ({ item }) => {
  return (
    <Card style={styles.searchItemContainer}>
      <Image source={{uri: item["thumbnail"]}} style={{height: 180, resizeMode: "contain"}} />
      <HeaderText size="8">{item["title"]}</HeaderText>
      <View>
        <StarRating rating={item["rating"]} />
      </View>
      <Text>Category: {item["category"]}</Text>
      <Text>Price: {item["price"]}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  searchItemContainer: {
    height: 350,
    padding: 4
  }
});

export default SearchItem;