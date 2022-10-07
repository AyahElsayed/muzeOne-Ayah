import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CreateAccount = () => {
  return (
    <View style={styles.CreateAccountContainer}>
      <Text>Create Account</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  CreateAccountContainer: {
    backgroundColor: '#fff',
    height: '100%'
  }
})
export default CreateAccount