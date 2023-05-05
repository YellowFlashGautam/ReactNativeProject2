import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Brown</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 16
    },
    container:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-evenly',
        margin: 8
    },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height:100,
        margin: 8,
        borderRadius: 8
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#49be25'
    },
    cardThree: {
        backgroundColor: '#be4d25'
    }
})