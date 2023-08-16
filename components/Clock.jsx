import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
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
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
  },
  date: {
    color: '#000000',
    fontSize: 40,
    fontWeight: '500',
    marginTop: 20,
  },
  time: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#000000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 75,
  },
  icon: {
    backgroundColor: '#00000050',
    width: 50,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
})
