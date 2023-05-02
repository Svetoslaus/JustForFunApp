import React from "react";
import {View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from "./components/ColorBox";

const App = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
    <Text style={styles.text}>These are my favorite colors :</Text>
    <ColorBox colorName="orange" hexCode="#cb4b16"/>
    <ColorBox colorName="magenta" hexCode="#d33682"/>
    <ColorBox colorName="blue" hexCode="#268bd2"/>
    <ColorBox colorName="cyan" hexCode="#2aa198"/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
    paddingHorizontal: 15,
    paddingTop: 45
    
   },
   text: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10
    
   }
});



export default App;