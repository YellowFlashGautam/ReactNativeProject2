import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(url: string) {
        Linking.openURL(url)
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.cardCotainer}>
            <Text style={styles.blogTitle}>What is new in JS12 !</Text>
            <Image style={styles.image} source={{
            uri: 'https://fastly.picsum.photos/id/111/3000/3000.jpg?hmac=wVOzgHNw_IVVwuGLTXu_dUv-R7mDqPizS-w7xLowx8k',
            height: 200
             }} />
            <Text style={styles.description} numberOfLines={3} ellipsizeMode='tail'>
            First of all, we want some fundamentals about JavaScript language and what is 
            JS. JavaScript is 3rd Generation language, like C, C++, and Java. 
            It's an Object-oriented language commonly called OOP Language, like Python, PHP, Java, Ruby and etc… 
            JavaScript was created by 1996 Brendan Eich. It was created for Netscape 2 and was designated as ECMA-262 in 1997. 
            JavaScript was transferred from Netscape to ECMA, although the Mozilla Foundation continued to work on it for the Firefox browser.
            </Text>
        
            <View style={styles.touchContainer}>
                <TouchableOpacity onPress={() => openWebsite('https://medium.com/@heshithananayakkara/basics-of-javascript-js-for-beginners-b6842df71b8e')}>
                    <Text style={styles.button}> READ MORE </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/?hl=en')}>
                    <Text style={styles.button}> FOLLOW </Text>
                </TouchableOpacity>
            </View>
      </View>
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
    cardCotainer:{
        backgroundColor:'#35BDD0',
        borderRadius: 8,
        marginHorizontal: 16,
        paddingBottom: 16,
        marginTop: 12
    },
    blogTitle:{
        fontSize: 16,
        fontWeight:'bold',
        marginHorizontal:16,
        marginTop: 8,
        textAlign: 'center',
        color:'#2827CC'
    },
    image:{
        marginVertical: 8
    },
    description: {
        marginHorizontal: 16,
        fontSize: 14,
        marginBottom: 16,
        color:'#ffffff',
        fontWeight:'400'
    },
    touchContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        color:'#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#8D3DAF',
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 8
    }
})