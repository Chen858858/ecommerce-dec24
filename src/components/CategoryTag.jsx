import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chip, Icon } from "react-native-paper";

export const CategoryTag = ({
  category = "",
  textSize = 14
}) => {

  const styles = StyleSheet.create({
    categoryContainer: {
      alignItems: "flex-start"
    },
    category: {
      fontFamily: "Gabarito",
      fontSize: textSize
    }
  });

  return (
    <View style={styles.categoryContainer}>
      <Chip icon={() => (<Icon source="tag" size={textSize} />)} textStyle={styles.category}>
        {category.replaceAll("-", " ")}
      </Chip>
    </View>
  );
};

export default CategoryTag;
