import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useState } from 'react'

import Clock from './components/Clock'
import Button from './components/Button'
import FortuneCard from './components/FortuneCard'
import FortuneModal from './components/FortuneModal'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onAddSticker = () => {
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Clock />
      <View style={styles.footerContainer}>
        <FortuneCard theme='primary' />
        <Button theme='primary' label='확 인' />
        <Button theme='hurt' label='아파요' />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFCD9',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
