import React from 'react'
import { View } from 'react-native'

export const Flex = ({ 
  children, 
  direction, 
  align, 
  justify, 
  wrap, 
  flex = 0, 
  style, 
  onLayout, 
  center
}) => {
  return (
    <View onLayout={onLayout} style={[
      { 
        flexDirection: direction, 
        alignItems: center ? 'center' : align, 
        justifyContent: center ? 'center' : justify, 
        flex, 
        flexWrap: wrap 
      }, 
      style
    ]}>
      {children}
    </View>
  )
}
