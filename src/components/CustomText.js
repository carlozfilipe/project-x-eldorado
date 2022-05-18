import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomText({ children, style }) {
  let customStyle = styles.text;

  if (style?.fontWeight === 'bold') {
    customStyle = styles.textBold;
  }

  return <Text style={[style, customStyle]}>{ children }</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat_400Regular',
    fontWeight: 'normal'
  },
  textBold: {
    fontFamily: 'Montserrat_700Bold',
    fontWeight: 'normal'
  }
})