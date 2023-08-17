import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

export default function Clock() {
  const [date, setDate] = useState(dayjs().locale('ko'))
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(dayjs().locale('ko'))
    }, 1000 * 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <View style={styles.header}>
      <Text style={styles.date}>{date.format('MMMM DD일 dddd')}</Text>
      <Text style={styles.time}>{date.format('a hh시 mm분')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  date: {
    color: '#000000',
    fontSize: 40,
    fontWeight: '500',
    marginTop: 10,
  },
  time: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#000000',
  },
})
