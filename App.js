import React from "react";
import {View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container1}>
      <Text style={styles.text}>orange</Text>
    </View>
    <View style={styles.container2}>
      <Text style={styles.text}>magenta</Text>
    </View>
    <View style={styles.container3}>
      <Text style={styles.text}>blue</Text>
    </View>
    <View style={styles.container4}>
      <Text style={styles.text}>cyan</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container1: {
    backgroundColor: '#cb4b16',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    
   },
   container2: {
    backgroundColor: '#d33682',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
   },
   container3: {
    backgroundColor: '#268bd2',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
   },
   container4: {
    backgroundColor: '#2aa198',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
   },
   safeArea: {
    flex: 1
   },
   text: {
    color: 'white',
    
   }
});



export default App;