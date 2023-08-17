import { Modal, View, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'
import Button from './Button'

export default function RemarkModal({ isVisible, children, onClose }) {
  const [number, onChangeNumber] = useState('')
  return (
    <View style={styles.container}>
      <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            editable
            multiline
            numberOfLines={4}
            maxLength={100}
            onChangeText={onChangeNumber}
            value={number}
            placeholder={'어디가 아픈지 \n적어주세요.'}
          />
          <Button theme='submit' label='전송하기' onPress={onClose} />
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
  input: {
    height: 400,
    width: 300,
    margin: 12,
    borderWidth: 1,
    fontSize: 40,
    padding: 10,
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
