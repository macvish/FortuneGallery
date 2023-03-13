import React from 'react'
import { 
  HomeIcon as SolidHomeIcon, 
  PencilIcon as SolidPencilIcon, 
  DocumentTextIcon as SolidDocumentTextIcon,
  EllipsisHorizontalIcon 
} from 'react-native-heroicons/solid'
import { HomeIcon, DocumentTextIcon, PencilIcon } from 'react-native-heroicons/outline'

import { Text } from '../Text'

export const TabIcons = ({ size, focused, name, label }) => {
  const color = focused ?'#3876F0' : '#5F6C85'
  
  const renderIcons = () => {
    if (name === 'home') {
        return focused ? <SolidHomeIcon size={size} color={color} /> : <HomeIcon size={size} color={color} />
    } else if (name === 'view') {
        return focused ? <SolidDocumentTextIcon size={size} color={color} /> : <DocumentTextIcon size={size} color={color} />
    } else if (name === 'create') {
        return focused ? <SolidPencilIcon size={size} color={color} /> : <PencilIcon size={size} color={color} />
    }

    return <EllipsisHorizontalIcon size={size} color={color} />
}
return (
    <>
        {renderIcons()}
        {!!label && <Text style={{ color }}>{label}</Text>}
    </>
)
}

