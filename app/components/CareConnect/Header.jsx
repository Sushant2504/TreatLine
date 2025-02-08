import { View, Text, TextInput, StyleSheet, Color, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import tw from 'twrnc'


const Header = () => {
     return(
         <View style={tw `mx-4 flex-row content-start`}>
               <Image source={require('../assets/images/menu.png')}  style={tw`h-4`}></Image>
               <Text style={tw`text-xl font-bold not-italic text-black `}>Care Connect</Text>
         </View>
     );
}



export default Header;