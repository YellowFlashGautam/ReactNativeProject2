import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View>
        <Image source={{
          height:200,
          uri:'https://fastly.picsum.photos/id/866/3000/3000.jpg?hmac=g2dYiDQlD9_S2IBYTaisRkhKE7bGc4g-MMKRgtRRQ2c'
        }} style={styles.image}/>
        <View style={styles.cardDescription}>
          <Text style={styles.descriptionStyle}>Go Enjoy this beautiful view on the top of mountain and live the moments. #Enjoy
            This beautiful place is just 30 mins hike from Kashmir.
          </Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.timeStyle}>30 mins hike</Text>
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
  image:{
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 8
  },
  cardDescription:{
    flex: 1,
    marginTop: 8,
    marginHorizontal: 16
  },
  descriptionStyle: {
    fontSize: 16,
    fontWeight:'bold'
  },
  time:{
    flex:1,
    marginTop: 8,
    marginHorizontal: 16
  },
  timeStyle:{
    fontSize: 12,
    fontStyle: 'italic',
    color: '#6c25be'
  }
})