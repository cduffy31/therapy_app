import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View,} from 'react-native';
import Card from './src/components/Card'
import idea from './testData/idea'

const App = () =>{
  return (
    <View style={styles.pageContainer}>
      <Card user={idea[0]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center', 
    flex:1,
  },
});

export default App;