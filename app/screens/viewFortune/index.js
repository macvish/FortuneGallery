import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet } from 'react-native'
import { Carousel } from 'react-native-basic-carousel'
import moment from 'moment'

import { Flex, Text } from '../../shared/components'
import { getFortunes } from '../../hooks'
import { randomColor } from '../../shared/util/colors'
import { metrics } from '../../shared/util/metrics'

export const ViewFortune = ({navigation, route}) => {
  const [randColor, setRandColor] = useState('')
  const [fortunes] = getFortunes()
  const styles = useStyle(randColor)
  const carouselRef = useRef()
  const { params } = route

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
    if (params?.item) {
      const index = params.item.id - 1
      setTimeout(() => {
        carouselRef.current?.scrollToIndex({index, animated: true})
      }, 500)
      navigation.setParams({item: null})
    }
  }, [])

  return (
    <Flex flex={1} style={styles.container}>
      {fortunes.length > 0
        ? <Carousel 
          ref={carouselRef}
          data={fortunes}
          renderItem={renderItem}
          itemWidth={metrics.width}
          getCurrentIndex={() => setRandColor(randomColor())}
        />
        : <Flex flex={1} center>
          <Text style={styles.dateText}>No available fortune, kindly create one now.</Text>
        </Flex>
      }
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
