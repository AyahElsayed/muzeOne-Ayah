import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './app/Login';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Mobile Development</Text> */}
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default App;
