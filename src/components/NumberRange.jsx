import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { sizes } from "../utils/sizes";
import { NumberRangeInput } from "./NumberRangeInput";

export const NumberRange = ({
  lowerLimit = null,
  upperLimit = null,
  minimumLabel = "low value",
  maximumLabel = "high value",
  numberRange = {"minimum": 0, "maximum": 1000},
  leftIcon = "lightbulb-outline",
  rightIcon = "star",
  setNumbers
}) => {
  const [minimumInputValue, setMinimumInputValue] = useState("");
  const [maximumInputValue, setMaximumInputValue] = useState("");

  const setInputValues = () => {
    setMinimumInputValue(numberRange["minimum"].toString());
    setMaximumInputValue(numberRange["maximum"].toString());
  };

  const processNewInputValues = () => {
    let newNumberRange = {"minimum": null, "maximum": null};
    let newMinimum = minimumInputValue;
    let newMaximum = maximumInputValue;

    // If minimum is not a number, set it to current minimum.
    if(isNaN(newMinimum) || isNaN(parseFloat(newMinimum))){
      newMinimum = numberRange["minimum"];
    }

    // If maximum is not a number, set it to current maximum.
    if(isNaN(newMaximum) || isNaN(parseFloat(newMaximum))){
      newMaximum = numberRange["maximum"];
    }

    // Converting new maximum and new minimum to numbers.
    newMinimum = parseFloat(newMinimum);
    newMaximum = parseFloat(newMaximum);

    // If minimum is less than the lower limit, set minimum to lower limit.
    if(lowerLimit){
      lowerLimit = parseFloat(lowerLimit);
      if(newMinimum < lowerLimit){
        newMinimum = lowerLimit;
      }
    }

    // If maximum is more than the upper limit, set maximum to upper limit.
    if(upperLimit){
      upperLimit = parseFloat(upperLimit);
      if(newMaximum > upperLimit){
        newMaximum = upperLimit;
      }
    }

    // THIS CODE IS ONLY FOR DEBUGGING ONLY. It will be deleted at the proper time.
    console.log({newMinimum, newMaximum});
  };

  useEffect(() => {
    setInputValues();
  }
  , [...Object.values(numberRange)]);

  useEffect(() => {
    processNewInputValues();
  }
  , [minimumInputValue, maximumInputValue]);

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
      <NumberRangeInput
        label={maximumLabel}
        value={maximumInputValue}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        setValue={setMaximumInputValue}
      />
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