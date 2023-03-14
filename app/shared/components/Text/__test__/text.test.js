import React from 'react'
import renderer from 'react-test-renderer'

import { Text } from '..'

it('Should render correctly', () => {
  renderer.create(<Text>Hi</Text>)
})
