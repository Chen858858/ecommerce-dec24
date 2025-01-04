import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import { sizes } from "../utils/sizes";

// list is in format {value: label}. checkedList is a list that only stores values.
export const Checklist = ({
  checkedItems = [],
  list = [],
  setCheckedItems
}) => {
  
  // This function adds or removes a checked item. Also updates the checked item list from parent component(s).
  const addDeleteItem = (item) => {
    setCheckedItems(!checkedItems.includes(item) ? [...checkedItems, item] : checkedItems.filter(checkedItem => checkedItem != item));
  };

  return (
    <View>
      {
        Object.keys(list).map((value, index) => 
          <TouchableOpacity key={index} onPress={() => addDeleteItem(value)}>
            <View style={styles.checkboxLabelContainer} key={index}>
              <Checkbox.Android status={checkedItems.includes(value) ? "checked": "unchecked"} />
              <Text style={styles.label}>{list[value]}</Text>
            </View>
          </TouchableOpacity>
          )
      }
    </View>
  )
}

const styles = {
  checkboxLabelContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    fontFamily: "Gabarito",
    fontSize: sizes.mdb
  }
}

export default Checklist;
