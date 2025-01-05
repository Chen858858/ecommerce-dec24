import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { sizes } from "../utils/sizes";
import { NumberRangeInput } from "./NumberRangeInput";

export const NumberRange = ({
  lowerLimit = 0,
  upperLimit = 100,
  minimumLabel = "low value",
  maximumLabel = "high value",
  minimumValue = "55",
  maximumValue = "",
  leftIcon = "lightbulb-outline",
  rightIcon = "star",
  setNumbers,
}) => {
  return (
    <View style={styles.numberRangeContainer}>
      <NumberRangeInput
        label={minimumLabel}
        value={minimumValue}
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
