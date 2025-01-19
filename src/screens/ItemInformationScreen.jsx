import React from "react";
import { View, Text } from "react-native";
import { HeaderText } from "../components/HeaderText";

export const ItemInformationScreen = ({ route, items }) => {
  const { itemId } = route.params;
  const itemInformation = items.filter(item => 
    item["id"] == itemId
  )[0];

  return (
    <View>
      <HeaderText size="3">{itemInformation["title"]}</HeaderText>
    </View>
  );
};

export default ItemInformationScreen;
