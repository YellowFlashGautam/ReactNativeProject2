import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 123,
            name: "Kashish",
            status: 'I love to code',
            image: 'https://picsum.photos/200/300'
        },
        {
            uid: 124,
            name: "Rishu",
            status: 'Hi there, love to see you',
            image: 'https://picsum.photos/200/300'
        },
        {
            uid: 122,
            name: "Anirudh",
            status: 'Awseome bro!',
            image: 'https://picsum.photos/200/300'
        },
        {
            uid: 125,
            name: "Raj",
            status: 'Happy to help always!',
            image: 'https://picsum.photos/200/300'
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView  style={styles.parent} overScrollMode='never' nestedScrollEnabled={false} showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingVertical: 12}}>
        {contacts.map(({uid, name, status, image}) => (
            <View key={uid} style={styles.container}>
                <Image style={styles.image} source={{uri:image, height: 60, width:60}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.status}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        marginTop: 18
      },
      parent:{
        marginHorizontal: 16
      },
      container:{
        flex: 1,
        flexDirection: 'row',
        marginVertical: 8
      },
      image:{
        borderRadius: 60 / 2
      },
      textContainer:{
        alignItems:'flex-start',
        flex: 1,
        justifyContent: 'space-evenly',
        marginHorizontal: 8
      },
      name:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#000000'
      },
      status:{
        fontSize: 14,
        fontWeight: '300',
        color:'#000000'
      }
})