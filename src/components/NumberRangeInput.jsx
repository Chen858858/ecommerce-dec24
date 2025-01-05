import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { sizes } from "../utils/sizes";

export const NumberRangeInput = ({
  label,
  value,
  leftIcon,
  rightIcon,
  setNumber
}) => {
  return (
    <TextInput
      mode="outlined"
      style={styles.input}
      contentStyle={styles.input}
      label={<Text style={styles.input}>{label}</Text>}
      value={value}
      left={leftIcon && <TextInput.Icon icon={leftIcon} />}
      right={rightIcon && <TextInput.Icon icon={rightIcon} />}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: 135,
    fontFamily: "Gabarito",
    fontSize: sizes.mdb
  }
});

export default NumberRangeInput;
