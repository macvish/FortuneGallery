import { useEffect, useState } from 'react'
import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase(
  {name: 'FortuneDB.db', location: 'default'}, 
  () => {}, 
  () => (err) => console.log(err)
)

export const getFortunes = () => {
  const [fortunes, setFortunes] = useState()

  const getData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Fortunes", 
        [], 
        (tx, results) => {
          let rowLength = results.rows.length
          if (rowLength > 0) {
            setFortunes(results.rows.raw())
          } 
        }
      )
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return [fortunes]
}