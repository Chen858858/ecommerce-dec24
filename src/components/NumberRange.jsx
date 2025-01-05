import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { sizes } from "../utils/sizes";
import { NumberRangeInput } from "./NumberRangeInput";

export const NumberRange = ({
  lowerLabel = "low value",
  higherLabel = "high value",
  lowerValue = "55",
  higherValue = "",
  leftIcon = "lightbulb-outline",
  rightIcon = "star",
  setNumbers,
}) => {
  return (
    <View style={styles.numberRangeContainer}>
      <NumberRangeInput
        label={lowerLabel}
        value={lowerValue}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
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
