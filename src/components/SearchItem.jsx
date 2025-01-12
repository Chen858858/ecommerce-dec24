import React from "react";
import { View, Text } from "react-native";

export const SearchItem = ({ item }) => {
  return (
    <View>
      <Text>Title: {item["title"]}</Text>
      <Text>Category: {item["category"]}</Text>
      <Text>Price: {item["price"]}</Text>
    </View>
  );
};

export default SearchItem;