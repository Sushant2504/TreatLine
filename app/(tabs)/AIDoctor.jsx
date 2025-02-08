import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import AIHeader from "../components/AIHeader";
import TextContainer from "../components/textfield";
import Button from "../components/button"


import Header from "../componenets/CareConnect/Header"


const AIDoctor = () => {
     const [searchText, setSearchText] = useState('');

     const handleSearch = () => {
          onSearch(searchText);
     }
     return (
          <View>

              <Header/>

          </View>
     );
}


const styles = StyleSheet.create({
     input: {
          flex: 1,
          marginHorizontal: 5,
          fontSize: 16,
     },


     verticalSpacer: {
          height: 50,
     },

     buttoncontent: {
         justifyContent: 'center',
         alignItems: 'center',
         marginLeft: 50,
     //     backgroundColor: '#4CAF50',
     //     padding: 15,
     //     borderRadius: 25,
     //     width: 200,
     }
})


export default AIDoctor;

