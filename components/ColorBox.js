import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({colorName, hexCode}) => {
    const boxColor = {
        backgroundColor: hexCode,
    }
    return (
        <View style={[styles.box, styles.cyan]}>
            <Text style={styles.boxText}>{colorName}:{hexCode}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    box: { padding: 10, justifyContent: 'center', marginTop: 10, alignItems: 'center'},
    
    boxText: { color: 'white', fontWeight:'bold'}
})

export default ColorBox;