import { StyleSheet, Text, View ,Linking,Image ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>

        <Text style={styles.headerText}> Social Media</Text>
        </View>
        <Image
        source={{uri:"https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg"}}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
<Text numberOfLines={3}>
In the symphony of life, nature orchestrates the most breathtaking melodies. Its verdant landscapes, majestic mountains, and shimmering waters paint a portrait of tranquility and resilience. Let's cherish, protect, and marvel at its beauty, for in its embrace lies the essence of our existence.</Text>
        </View>
        <View style={styles.footerContainer}>
<TouchableOpacity
onPress={()=>{
    openWebsite("https://www.uicolorpicker.learncodeonline.in");
}}
><Text style={styles.socialLink}>Read More</Text></TouchableOpacity>

<TouchableOpacity
onPress={()=>{
    openWebsite("https://www.istockphoto.com/photo/abstract-digital-futuristic-eye-gm1322220448-408249070");
}}
><Text style={styles.socialLink}>Follow Me</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:8,

    },
    card:{
width:350,
height:370,
borderRadius:6,
marginVertical:12,
marginHorizontal:16,

    },
    elevatedCard:{
backgroundColor:"#F3B63A",
color:"#fff",
elevation:4,
shadowOffset:{
    width:1,
    height:1
},
shadowColor:"black",
shadowOpacity:0.2
    },
    headingContainer:{
height:40,
flexDirection:"row",
justifyContent:"center",
alignItems:"center"

    },
    headerText:{
color:"black",
fontSize:16,
fontWeight:"bold"
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    bodyContainer:{
padding:10,
    },
    footerContainer:{
padding:8,
flexDirection:'row',
alignItems:"center",
justifyContent:"space-evenly"
    },
    socialLink:{
fontSize:16,
color:"#3C40C6",
backgroundColor:"#fff",
paddingHorizontal:9,
paddingVertical:6,
borderRadius:6,


    }

})