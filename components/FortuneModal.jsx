import { Modal, View, Text, Pressable, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Button from './Button'

export default function FortuneModal({ isVisible, children, onClose }) {
  return (
    <View style={styles.container}>
      <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{children}</Text>
          <Button theme='modal' label='닫기' onPress={onClose} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    alignSelf: 'center',
    height: 500,
    width: 350,
    backgroundColor: 'rgba(30, 30, 30, 0.7)',
  },
  modalText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30,
  },
})
