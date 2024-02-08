import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const natureItems = [
        {
            uid: "1",
            name: "Sunflower Fields",
            status: "Blooming",
            imageUrl: "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg",
        },
        {
            uid: "2",
            name: "Majestic Mountains",
            status: "Serene",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQeaPFn5B5_4JTKyVoj3qf3JMqMzS6N48QrT1_Sd-Lw&s",
        },
        {
            uid: "3",
            name: "Enchanted Forest",
            status: "Thriving",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnK-UdggzJF178yjoY75CHEdYnfKFr5e99m_M30FGhjg&s",
        },
        {
            uid: "4",
            name: "Crystal Clear Waters",
            status: "Tranquil",
            imageUrl: "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg",
        },
        {
            uid: "5",
            name: "Aurora Borealis",
            status: "Dancing",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16ZEyydvl04BrSPQ56gOhXPH06J40pxTh1kg8_12ReQ&s",
        }
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.Container}
      scrollEnabled={false}
      >
{natureItems.map(({uid,name,status,imageUrl})=>(
<View key={uid} style={styles.userCard}>
<Image
source={{
    uri:imageUrl
}}
style={styles.userImage}
/>
<View>
<Text style={styles.userName}>{name}</Text>
<Text style={styles.userStatus}>{status}</Text>
</View>

</View>
)

)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:8,

    },
    Container:{
paddingHorizontal:16,
marginBottom:4,

    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:"center",
        marginBottom:3,
        backgroundColor:"#B83227",
        padding:8,
        borderRadius:14
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:100,
        objectFit:"cover",
        marginRight:14
    },
    userStatus:{
        fontSize:12,
color:"black"
    },
    userName:{
fontSize:16,
fontWeight:"600",
color:"#fff"

    }

})