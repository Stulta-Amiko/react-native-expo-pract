import { StyleSheet, View, Pressable, Text } from 'react-native'

export default function Button({ label, theme, onPress }) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#000000', borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: '#CCFFB1' }]}
          onPress={onPress}
        >
          <Text style={[styles.buttonLabel, { color: '#000000' }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    )
  } else if (theme === 'hurt') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#000000', borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: '#FFB1B1' }]}
          onPress={onPress}
        >
          <Text style={[styles.buttonLabel, { color: '#000000' }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    )
  } else if (theme === 'modal') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#000000', borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: '#D9F0FE' }]}
          onPress={onPress}
        >
          <Text style={[styles.buttonLabel, { color: '#000000' }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    )
  } else if (theme === 'submit') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#000000', borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: '#C1FFAC' }]}
          onPress={onPress}
        >
          <Text style={[styles.buttonLabel, { color: '#000000' }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert('You pressed a button.')}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 80,
    marginHorizontal: 20,
    marginTop: 20,
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
