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
      <Tab.Navigator>
        {paths.map((item, index) => {
          return renderTab(item, index);
        })}
      </Tab.Navigator>
    </>
  )
}

export default GenerateTab
