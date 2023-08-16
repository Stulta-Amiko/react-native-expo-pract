import { StyleSheet, View, Pressable, Text } from 'react-native'
import { useState } from 'react'
import FortuneModal from './FortuneModal'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function FortuneCard({ label, theme }) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onAddSticker = () => {
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  return (
    <div>
      <Pressable onPress={onAddSticker}>
        <View
          style={[
            styles.buttonContainer,
            {
              borderWidth: 4,
              borderColor: '#000000',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: 18,
            },
          ]}
        >
          <Text style={[styles.buttonLabel, { color: '#000000' }]}>
            {label}
          </Text>
        </View>
      </Pressable>
      <FortuneModal
        isVisible={isModalVisible}
        onClose={onModalClose}
        children='테스트'
      ></FortuneModal>
    </div>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 200,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#ffffff',

    fontWeight: 'bold',
    fontSize: 50,
  },
})
