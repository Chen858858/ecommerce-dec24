import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { sizes } from "../utils/sizes";

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
      fontSize: sizes.mdb
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
      <Icon source={leftIcon} size={sizes.mdd} />
      <TextInput
        mode="outlined"
        style={styles.input}
        contentStyle={styles.input}
        label={<Text style={styles.input}>{label}</Text>}
        value={value}
        onChangeText={valueText => setValue(valueText)}
      />
      <Icon source={rightIcon} size={sizes.mdd} />
    </View>
    
  )
}
export default NumberRangeInput;
