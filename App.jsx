import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

import Clock from './components/Clock'
import Button from './components/Button'
import FortuneCard from './components/FortuneCard'
import RemarkModal from './components/RemarkModal'

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
      <Text style={styles.alarmOn}>알림이 왔습니다.</Text>
      <View style={styles.footerContainer}>
        <FortuneCard theme='primary' />
        <Text style={styles.moreClick}>더 보려면 클릭해주세요.</Text>
        <Button theme='primary' label='확 인' />
        <Button theme='hurt' label='아파요' onPress={onAddSticker} />
      </View>
      <StatusBar style='auto' />
      <RemarkModal
        isVisible={isModalVisible}
        onClose={onModalClose}
        children='테스트'
      ></RemarkModal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFCD9',
    alignItems: 'center',
  },
  moreClick: {
    color: '#000000',
    fontWeight: 'normal',
    fontSize: 30,
  },
  alarmOn: {
    color: '#000000',
    fontWeight: 'Bold',
    fontSize: 40,
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
