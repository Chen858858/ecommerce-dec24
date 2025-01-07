import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import OutsidePressHandler from "react-native-outside-press";
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
  leftIcon = "map",
  rightIcon = "star",
  setNumberRange
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

    if(lowerLimit){
      lowerLimit = parseFloat(lowerLimit);
      // If minimum is less than the lower limit, set minimum to lower limit.
      if(newMinimum < lowerLimit){
        newMinimum = lowerLimit;
      }
      // If maximum is less than the lower limit, set maximum to lower limit.
      if(newMaximum < lowerLimit){
        newMaximum = lowerLimit;
      }
    }

    if(upperLimit){
      upperLimit = parseFloat(upperLimit);
      // If maximum is more than the upper limit, set maximum to upper limit.
      if(newMaximum > upperLimit){
        newMaximum = upperLimit;
      }
      // If minimum is more than the upper limit, set minimum to upper limit.
      if(newMinimum > upperLimit){
        newMinimum = upperLimit;
      }
    }

    // If minimum is more than the maximum, swap them.
    if(newMinimum > newMaximum){
      const oldNewMinimum = newMinimum;
      newMinimum = newMaximum;
      newMaximum = oldNewMinimum;
    }

    // THIS CODE IS ONLY FOR DEBUGGING ONLY. It will be deleted at the proper time.
    console.log({newMinimum, newMaximum});

    setNumberRange({"minimum": newMinimum, "maximum": newMaximum});
  };

  useEffect(() => {
    setInputValues();
  }
  , []);

  useEffect(() => {
    processNewInputValues();
  }
  , [minimumInputValue, maximumInputValue]);

  return (
    <OutsidePressHandler onOutsidePress={() => setInputValues()}>
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
    </OutsidePressHandler>
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