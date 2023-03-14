import React, { useEffect, useState } from 'react'
import { Alert, Platform, Pressable, StyleSheet, TextInput } from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'

import { Flex, Text } from '../../shared/components'
import { routeUrls } from '../../navigation/routeUrls'
import { metrics } from '../../shared/util/metrics'

const db = openDatabase(
  {name: 'FortuneDB.db', location: 'default'}, 
  () => {}, 
  (err) => console.log(err)
)

export const CreateFortune = ({ navigation }) => {
  const [fortune, setFortune] = useState('')

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS '
        +'Fortunes '
        +'(id INTEGER PRIMARY KEY AUTOINCREMENT, fortune TEXT, date DATE);', 
        [], 
        () => {},
        (error) => console.log(error)
      )
    })
  }

  const onDone = async () => {
    if (!fortune) {
      return Alert.alert('', 'Field can not be empty')
    }

    await db.transaction((tx) => {
      const sql = "INSERT INTO Fortunes (fortune, date) VALUES (?,?);"
      const date = new Date()
      tx.executeSql(
        sql, [fortune, date], 
        (_, results) => {
        console.log('Results', results.rowsAffected)
        if (results.rowsAffected > 0) {
          navigation.navigate(routeUrls.home)
        }
      }, (err) => console.log(err))
    })
  }

  const renderDoneButton = () => {
    return (
      <Flex direction='row' justify='flex-end'>
        <Pressable style={styles.doneBtn} onPress={onDone}>
          <Text weight='600' style={styles.doneBtnText}>Done</Text>
        </Pressable>
      </Flex>
    )
  }

  useEffect(() => {
    createTable()
  }, [])

  return (
    <Flex style={styles.container}>
      <TextInput
        placeholder='Start writing...'
        value={fortune}
        multiline
        style={styles.input}
        onChangeText={setFortune}
      />
      {renderDoneButton()}
    </Flex>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: metrics.height * 0.6,
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: '600',
    textAlignVertical: 'top'
  },
  doneBtn: {
    backgroundColor: '#000000', 
    padding: 10,
    borderRadius: 10
  },
  doneBtnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700'
  }
})
