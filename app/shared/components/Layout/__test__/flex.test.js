import React from 'react'
import renderer from 'react-test-renderer'

import { Flex } from '../flex'

it('Should render correctly', () => {
  renderer.create(<Flex />)
})
