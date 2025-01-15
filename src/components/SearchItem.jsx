import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { HeaderText } from "./HeaderText";
import { StarRating } from "./StarRating";

export const SearchItem = ({ item }) => {
  return (
    <Card contentStyle={styles.searchItemContainer}>
      <Image source={{uri: item["thumbnail"]}} style={styles.image} />
      <View style={styles.textContainer}>
        <HeaderText size="8">{item["title"]}</HeaderText>
        <View>
          <StarRating rating={item["rating"]} />
        </View>
        <Text>Category: {item["category"]}</Text>
        <Text>Price: {item["price"]}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain"
  },
  searchItemContainer: {
    height: 350,
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  textContainer: {
    width: 210
  }
});

export default SearchItem;