import react from 'react';
import { SafeAreaView ,Text ,View,StyleSheet,useColorScheme } from "react-native";

function FlatCards():JSX.Element{
    // const isDarkMode = useColorScheme() === 'dark';

  return(
<View>
      <View style={styles.container}>
  <Text style={styles.headingText}>Flat cards</Text>

        </View>
        <View style={styles.container}>

     <View style={[styles.card,styles.cardone]}>
      <Text>Red</Text>
     </View>
     <View style={[styles.card,styles.cardtwo]}>
      <Text>green</Text>
     </View>
     <View style={[styles.card,styles.cardthree]}>
      <Text>Gray</Text>
     </View>
     <View style={[styles.card,styles.cardfour]}>
      <Text>Blue</Text>
     </View>
     </View>
 </View>

  )
}
const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:"bold",
    paddingHorizontal:1
  },
    container:{
flex:1,
flexDirection:"row",
padding:8,
    },
card:{
  flex:1,
justifyContent:"center",
alignItems: "center",
  width:100,
  height:100,
  borderRadius: 4,
  margin:8,
  
color:"#fff"

},
cardone:{
  backgroundColor:"#EF5354"
},
cardtwo:{
  backgroundColor:"#42f569"
},
cardthree:{
  backgroundColor:"#595359"
},
cardfour:{
  backgroundColor:"#0d16bf",
}
})

export default FlatCards;