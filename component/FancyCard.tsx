import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Trending places</Text>
        <View style={[styles.card,styles.cardElevated]}>
<Image
source={{
    uri:"https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s="
}}
style={styles.cardImage}

/>
<View style={styles.cardBody}>
<Text style={styles.cardTitle}>Technical Eye</Text>
<Text style={styles.cardLabel}>Feel the technology</Text>
<Text style={styles.cardDiscription}>Technological Surveillance: "Technical eyes" may describe surveillance systems equipped with advanced technology, such as cameras, sensors, or AI algorithms, used for monitoring purposes in various settings like security, traffic managementenvironmental monitoring</Text>
<Text style={styles.cardFooter}>Card Footer</Text>
</View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:8,
    },
    card:{
        width:350,
        height:380,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,

    },
    cardElevated:{
        backgroundColor:"#ffffff",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
          borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
flex:1,
flexGrow:1,
paddingHorizontal:12
    },
    cardTitle:{
        color:"red",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:6
    },
    cardLabel:{
        color:"#000",
        fontSize:14,
        marginBottom:4
    },
    cardDiscription:{
        color:"#192A56",
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardFooter:{
        color:"#000",
        paddingBottom:1,
    }
})