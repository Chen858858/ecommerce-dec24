import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { sizes } from '../utils/sizes';
import FontText from './FontText';

export const HeaderText = ({
  children,
  size = 4,
  color = "#000000",
  isBold = true,
  isUnderlined = false,
  isItalics = false
}) => {
  const sizeConvert = {
    1: sizes.xla,
    2: sizes.lgd,
    3: sizes.lgb,
    4: sizes.lga,
    5: sizes.mde,
    6: sizes.mdd,
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
  )
}

// HeaderText.defaultProps = {
//   size: 4,
//   color: "#000000",
//   isBold: true,
//   isUnderlined: false,
//   isItalics: false
// }

export default HeaderText;