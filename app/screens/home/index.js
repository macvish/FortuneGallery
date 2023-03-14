import React from 'react'
import { FlatList, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { PlusIcon } from 'react-native-heroicons/solid'

import { Flex, Text } from '../../shared/components'
import { getFortunes } from '../../hooks/getFortunes'
import { metrics } from '../../shared/util/metrics'
import { randomColor } from '../../shared/util/colors'
import { routeUrls } from '../../navigation/routeUrls'

export const Home = ({ navigation }) => {
  const [fortunes] = getFortunes()

  const handleOnPress = (item) => {
    navigation.navigate(routeUrls.view, { item })
  }

  const renderItems= ({ item, index }) => {
    const date = moment(item?.date).format('DD MMM, YYYY')

    return (
      <TouchableOpacity 
        key={index} 
        activeOpacity={0.8} 
        onPress={() => handleOnPress(item)} 
        style={{ marginBottom: 10 }}
      >
        <Flex justify='flex-start' style={[styles.cardWrapper, {backgroundColor: randomColor()}]}>
          <Flex flex={1}>
            <Text weight='700' style={styles.text}>{item.fortune}</Text>
          </Flex>
          <Flex center style={styles.datewrapper}>
            <Text style={styles.dateText}>{date}</Text>
          </Flex>
        </Flex>
      </TouchableOpacity>
    )
  }

  const renderAddButton = () => {
    return (
      <Pressable style={styles.addBtn} onPress={() => navigation.navigate(routeUrls.create)}>
        <PlusIcon size={25} color='#ffffff' />
      </Pressable>
    )
  }

  return (
    <Flex flex={1} style={styles.container}>
      <Text weight='bold' fontSize={35} style={{ marginVertical: 20 }}>My Fortunes</Text>
      {fortunes?.length > 0
        ? <FlatList 
            data={fortunes}
            renderItem={renderItems}
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
            bounces={false}
          />
        : <Flex flex={1} center>
          <Text>No available fortune, kindly create one now.</Text>
        </Flex>
      }
      {renderAddButton()}
    </Flex>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30
  },
  cardWrapper: {
    backgroundColor: 'blue',
    width: metrics.width/2.3,
    minHeight: metrics.width/1.8,
    padding: 20,
    borderRadius: 10
  },
  text: {
    color: '#ffffff',
    fontSize: 20
  },
  datewrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    maxWidth: metrics.width * 0.29,
    padding: 10,
    marginTop: 10,
    borderRadius: 10
  },
  dateText: {
    color: '#ffffff'
  },
  addBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#000000', 
    padding: 20,
    borderRadius: 50
  }
})
