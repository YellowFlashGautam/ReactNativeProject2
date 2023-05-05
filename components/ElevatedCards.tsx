import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView contentContainerStyle={{justifyContent: 'space-evenly', paddingHorizontal: 8}} 
      overScrollMode='never' nestedScrollEnabled={false} showsHorizontalScrollIndicator={false} horizontal={true}>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>and</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>see</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>magic</Text>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 16
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
    cardElevated: {
        backgroundColor: '#EF5354',
        elevation: 8
    }
})