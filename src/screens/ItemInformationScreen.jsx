import React from "react";
import { View, Text } from "react-native";

export const ItemInformationScreen = ({ route, items }) => {
  const { itemId } = route.params;
  const itemInformation = items.filter(item => 
    item["id"] == itemId
  )[0];

  return (
    <View>
      <Text>{itemInformation["title"]}</Text>
    </View>
  );
};

export default ItemInformationScreen;
