import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const GenerateStack = ({paths}) => {
  const renderScreen = ({ name, component }, index) => {
    return (
      <Stack.Screen
        name={name}
        key={index}
        options={() => ({
          title: '',
        })}
        component={component}
      />
    )
  }

  return (
    <>
      <Stack.Navigator>
        {paths.map((item, index) => {
          return renderScreen(item, index);
        })}
      </Stack.Navigator>
    </>
  )
}

export default GenerateStack
