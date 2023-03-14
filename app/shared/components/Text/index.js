import React from 'react'
import { Text as RNText } from 'react-native'

export const Text = ({ style, children, fontSize, weight, ...props }) => {
  return (
    <RNText {...props} style={[
      { color: '#23272F', fontWeight: weight, fontSize: fontSize ?? 14 },
      style,
    ]}>
      {children}
    </RNText>
  )
}
