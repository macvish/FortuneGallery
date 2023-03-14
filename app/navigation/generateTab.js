import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Flex, TabIcons } from '../shared/components'

const Tab = createBottomTabNavigator()

const GenerateTab = ({paths}) => {
  const renderTab = ({name, icon, label, component}, index) => {
    return (
      <Tab.Screen
        name={name}
        key={index}
        component={component}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused, size}) => (
            <>
              <Flex flex={1} center>
                <TabIcons
                  name={icon}
                  size={size}
                  focused={focused}
                  label={label}
                />
              </Flex>
            </>
          ),
        }}
      />
    )
  }

  return (
    <>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false, unmountOnBlur: true }}>
        {paths.map((item, index) => {
          return renderTab(item, index);
        })}
      </Tab.Navigator>
    </>
  )
}

export default GenerateTab
