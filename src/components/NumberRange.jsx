import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { sizes } from "../utils/sizes";

export const NumberRange = ({
  leftLabel = "test label left",
  rightLabel = "test label right",
  leftValue = "",
  rightValue = "",
  leftIcon = "lightbulb-outline",
  rightIcon = "star",
  endingText = "",
  setNumbers,
}) => {
  return (
    <View style={styles.numberRangeContainer}>
      <TextInput
        mode="outlined"
        style={styles.input}
        contentStyle={styles.input}
        label={<Text style={styles.input}>{leftLabel}</Text>}
        left={leftIcon && <TextInput.Icon icon={leftIcon} />}
        right={rightIcon && <TextInput.Icon icon={rightIcon} />}
      />
      <Text style={styles.text}>to</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 135,
    fontFamily: "Gabarito",
    fontSize: sizes.mdb
  },
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
