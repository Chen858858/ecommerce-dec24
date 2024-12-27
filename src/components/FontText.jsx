import React from 'react'
import { View, Text } from 'react-native'

export const FontText = ({ children }) => {
  return (
    <Text style={{fontFamily: "Gabarito"}}>{children}</Text>
  )
}

export default FontText;
