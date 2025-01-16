import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { HeaderText } from "./HeaderText";
import { CategoryTag } from "./CategoryTag";
import { StarRating } from "./StarRating";

export const SearchItem = ({ item }) => {
  return (
    <Card contentStyle={styles.searchItemContainer}>
      <Image source={{uri: item["thumbnail"]}} style={styles.image} />
      <View style={styles.textContainer}>
        <HeaderText size="8">{item["title"]}</HeaderText>
        <View>
          <StarRating rating={item["rating"]} textSize="16" />
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceDollars}>${Math.floor(item["price"])}</Text>
          <Text style={styles.priceCents}>.{Math.round((item["price"] - Math.floor(item["price"])) * 100)}</Text>
        </View>
        <CategoryTag category={item["category"]} />
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
  priceDollars: {
    fontFamily: "Gabarito",
    fontSize: 32
  },
  priceCents: {
    fontFamily: "Gabarito",
    fontSize: 20
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center"
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