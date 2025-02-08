import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { FontAwesome } from '@expo/vector-icons';
import Header from "./components/BookingSlots/Header"
import DoctorContainer from "./components/BookingSlots/DoctorContainer"

import tw from 'twrnc'

const doctors = [
     {
          id: 1, // Added ID
          img: "https://cdn-icons-png.flaticon.com/128/8815/8815112.png",
          name: "Sushant Nadavade",
          speciality: "Cardiologist",
     },
     {
          id: 2, // Added ID
          img: "https://cdn-icons-png.flaticon.com/128/8815/8815112.png",
          name: "Tarun Patil",
          speciality: "Chronologist",
     },
     {
          id: 3, // Added ID
          img: "https://cdn-icons-png.flaticon.com/128/8815/8815112.png",
          name: "Kunal Suryawanshi",
          speciality: "Endronologist",
     },
     {
          id: 4, // Added ID
          img: "https://cdn-icons-png.flaticon.com/128/8815/8815112.png",
          name: "Gauri karkhile",
          speciality: "Gynanacologist",
     },
     {
          id: 5, // Added ID
          img: "https://cdn-icons-png.flaticon.com/128/8815/8815112.png",
          name: "Rushikesh ghodke",
          speciality: "Neurologist",
     },
     {
          id: 6, // Added ID
          img: "https://cdn-icons-png.flaticon.com/128/8815/8815112.png",
          name: "Sushant Nadavade",
          speciality: "Dentist",
     },
     {
          id: 7, // Added ID
          img: "https://cdn-icons-png.flaticon.com/128/8815/8815112.png",
          name: "Tarun Patil",
          speciality: "Cardiologist",
     },
     {
          id: 8, // Added ID
          img: "https://cdn-icons-png.flaticon.com/128/8815/8815112.png",
          name: "Kunal Suryawanshi",
          speciality: "Endochronologist",
     },
     {
          id: 9, // Added ID
          img: "https://cdn-icons-png.flaticon.com/128/8815/8815112.png",
          name: "Rushikesh Ghodke",
          speciality: "Dentist",
     },
     {
          id: 10, // Added ID
          img: "https://cdn-icons-png.flaticon.com/128/8815/8815112.png",
          name: "Gauri Karkhile",
          speciality: "Pulmonogist",
     },
];


const BookingScreen = () => {
     return (
          <ScrollView>
               <Header />

               
               <FlatList 
                  data={doctors}
                  showHorizontalScrollIndicator = {false}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => <DoctorContainer doctor={item}/>}
                  
               />
              

          </ScrollView>
     );
}


export default BookingScreen;