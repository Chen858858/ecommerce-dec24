import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { sizes } from "../utils/sizes";

export const NumberRange = ({
  leftIcon = "",
  rightIcon = ""
}) => {
  return (
    <View>
      <TextInput contentStyle={styles.input} />
      <Text style={styles.text}>to</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontFamily: "Gabarito",
    fontSize: sizes.mdb
  },
  text: {
    fontFamily: "Gabarito",
    fontSize: sizes.mdb
  }
});

export default NumberRange
