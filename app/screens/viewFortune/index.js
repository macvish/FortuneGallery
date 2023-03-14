import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Carousel } from 'react-native-basic-carousel'
import moment from 'moment'

import { Flex, Text } from '../../shared/components'
import { getFortunes } from '../../hooks'
import { randomColor } from '../../shared/util/colors'
import { metrics } from '../../shared/util/metrics'

export const ViewFortune = () => {
  const [randColor, setRandColor] = useState('')
  const [fortunes] = getFortunes()
  const styles = useStyle(randColor)

  const renderItem = ({item, index}) => {
    const date = moment(item?.date).format('DD MMM, YYYY')
    
    return (
      <Flex center style={styles.itemContainer} key={index}>
        <Flex flex={1} center>
          <Text style={styles.text}>{item.fortune}</Text>
        </Flex>
        <Flex style={styles.datewrapper}>
          <Text style={styles.dateText}>{date}</Text>
        </Flex>
      </Flex>
    )
  }
  
  useEffect(() => {
    setRandColor(randomColor())
  }, [])

  return (
    <Flex flex={1} style={styles.container}>
      <Carousel 
        data={fortunes}
        renderItem={renderItem}
        itemWidth={metrics.width}
        getCurrentIndex={() => setRandColor(randomColor())}
        autoplay
      />
    </Flex>
  )
}

const useStyle = (bgColor) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: bgColor,
    },
    itemContainer: {
      flex: 1,
      padding: 30
    },
    text: {
      color: '#ffffff',
      fontSize: 30
    },
    datewrapper: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      padding: 10,
      borderRadius: 10
    },
    dateText: {
      color: '#ffffff',
      fontSize: 16
    }
  })
    return styles
}
