import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { sizes } from "../utils/sizes";
import { NumberRangeInput } from "./NumberRangeInput";

export const NumberRange = ({
  lowerLimit = "0",
  upperLimit = null,
  minimumLabel = "low value",
  maximumLabel = "high value",
  numberRange = {"minimum": 0, "maximum": 1000},
  leftIcon = "lightbulb-outline",
  rightIcon = "star",
  setNumbers,
}) => {
  const [minimumInputValue, setMinimumInputValue] = useState("");
  const [maximumInputValue, setMaximumInputValue] = useState("");

  useEffect(() => {
    setMinimumInputValue(numberRange["minimum"].toString());
    setMaximumInputValue(numberRange["maximum"].toString());
  }
  , [])

  return (
    <View style={styles.numberRangeContainer}>
      <NumberRangeInput
        label={minimumLabel}
        value={minimumInputValue}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        setValue={setMinimumInputValue}
      />
      <Text style={styles.text}>to</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  numberRangeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  text: {
    fontFamily: "Gabarito",
    fontSize: sizes.mdb
  }
});

export default NumberRange;
