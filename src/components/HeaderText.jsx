import React from "react";
import { View, Text } from "react-native";
import FontText from "./FontText";

export const HeaderText = ({
  children,
  size = 4,
  color = "#000000",
  isBold = true,
  isUnderlined = false,
  isItalics = false
}) => {
  const sizeConvert = {
    1: 60,
    2: 48,
    3: 40,
    4: 36,
    5: 32,
    6: 28,
    7: 24,
    8: 20
  }
  
  return (
    <View>
      <FontText>
        <Text
          style={{
            fontSize: sizeConvert[size],
            color: color,
            fontWeight: isBold ? "bold": "normal",
            textDecorationLine: isUnderlined ? "underline": "none",
            fontStyle: isItalics ? "italic": "normal"
        }}>
          {children}
        </Text>
      </FontText>
    </View>
  );
};

export default HeaderText;