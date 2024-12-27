import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import { sizes } from "../utils/sizes";
import { useScrollToTop } from "@react-navigation/native";

// list is in format {value: label}. checkedList only store values.
export const Checklist = ({ list, alreadyCheckedItems = [] }) => {
  const [checkedItems, setCheckedItems] = useState(alreadyCheckedItems);
  const addDeleteItem = (item) => {
    if(!checkedItems.includes(item)){
      setCheckedItems([...checkedItems, item]);
    }
    else{
      setCheckedItems(checkedItems.filter(checkedItem => checkedItem != item));
    }
  }

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
