import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, TextInput } from "react-native-paper";
import { colors } from "../utils/colors";

export const NumberRangeInput = ({
  label,
  value,
  leftIcon,
  rightIcon,
  setValue
}) => {

  const [inputWidth, setInputWidth] = useState(135);

  useEffect(() => {
    let newInputWidth = 135;
    if(leftIcon){
      newInputWidth -= 25;
    }
    if(rightIcon){
      newInputWidth -= 25;
    }
    setInputWidth(newInputWidth);
  }, [leftIcon, rightIcon])

  const styles = StyleSheet.create({
    input: {
      width: inputWidth,
      fontFamily: "Gabarito",
      fontSize: 20
    },
    inputContainer: {
      width: 150,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    }
  });

  return (
    <View style={styles.inputContainer}>
      <Icon source={leftIcon} size="28" />
      <TextInput
        mode="outlined"
        style={styles.input}
        contentStyle={styles.input}
        label={label ? <Text style={styles.input}>{label}</Text> : ""}
        value={value}
        onChangeText={valueText => setValue(valueText)}
      />
      <Icon source={rightIcon} size="28" />
    </View>
    
  )
}
export default NumberRangeInput;
