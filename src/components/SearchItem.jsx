import React from "react";
import { createStaticNavigation, useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Card, Icon } from "react-native-paper";
import { HeaderText } from "./HeaderText";
import { CategoryTag } from "./CategoryTag";
import { StarRating } from "./StarRating";
import { colors } from "../utils/colors";

export const SearchItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Card
      contentStyle={styles.searchItemContainer}
      onPress={() => navigation.navigate("ItemInformation", {itemId: item["id"]})}
    >
      <View style={styles.searchItemInformationContainer} >
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
          <CategoryTag category={item["category"]} textSize="14" />
        </View>
      </View>
      <Button
        mode="outlined"
        style={styles.detailsButtonOutside}
      >
        <View style={styles.detailsButtonInside}>
          <Text style={styles.detailsButtonText}>More details</Text>
          <Icon source="arrow-right" size="16" color={colors.purpura} />
        </View>
      </Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  detailsButtonOutside: {
    borderColor: colors.purpura
  },
  detailsButtonInside: {
    width: 110,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  detailsButtonText: {
    fontFamily: "Gabarito",
    fontSize: 16,
    color: colors.purpura
  },
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
    height: 230,
    padding: 4,
    justifyContent: "space-around"
  },
  searchItemInformationContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  textContainer: {
    width: 210
  }
});

export default SearchItem;