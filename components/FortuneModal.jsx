import { Modal, View, Text, StyleSheet, ScrollView } from 'react-native'
import Button from './Button'

export default function FortuneModal({ isVisible, children, onClose }) {
  return (
    <View style={styles.container}>
      <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <ScrollView>
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </ScrollView>
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
    borderWidth: 4,
    borderColor: 'rgba(50,50,50, 0.5)',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    alignSelf: 'center',
    height: 500,
    width: 350,
    backgroundColor: 'rgba(255,255,255, 1)',
  },
  modalText: {
    color: '#000000',
    fontWeight: 'normal',
    fontSize: 40,
  },
})
