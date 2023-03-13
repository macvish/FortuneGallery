import React from 'react'
import { Text as RNText } from 'react-native'

export const Text = ({ style, children, weight, ...props }) => {
  return (
    <RNText {...props} style={[
      { color: colors.text, fontWeight: weight },
      style,
    ]}>
      {children}
    </RNText>
  )
}
