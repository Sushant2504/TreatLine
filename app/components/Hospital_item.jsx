import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router";



const HospitalItem = ({hospital}) => {
     

    return(
         <View style={styles.maincontent}>
              
         <Image source={{uri: hospital.image}}  style={styles.img}/>      
          <View>
                <Text style={styles.text}>{hospital.title}</Text>
          </View>
         </View>
    );
}


const styles = StyleSheet.create({
       
     maincontent: {
           display: 'flex',
     },

     img: {
          width: '100%',
          height: 110,
     },

     text: {
         fontSize: 18,
         fontWeight: 'normal',
         fontStyle: 'normal',
     }
     
});


export default HospitalItem;