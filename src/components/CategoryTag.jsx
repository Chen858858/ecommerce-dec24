import React from "react";
import { Text, View } from "react-native";

export const CategoryTag = ({
  category = "",
  textSize = 16
}) => {
  return (<Text>
    {category}
  </Text>);
};

export default CategoryTag;
