import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons'

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.logoContainer}>
        {/* Replace with the path to your logo image */}
        <Ionicons name="menu" size={25} color={"black"} style={styles.icon} />
        <Text style={styles.logoText}>TreatLine</Text>
      </View>

      <TouchableOpacity style={styles.profileContainer} onPress={() => router.push('profile')}>
        {/* Replace with the URL or local path to the profile photo */}
        <Image source={{ uri: 'https://img.freepik.com/premium-vector/health-nurse-icon-flat-illustration-health-nurse-vector-icon-web-design_98396-45929.jpg?uid=R144673261&ga=GA1.1.1951753748.1737620454&semt=ais_hybrid' }} style={styles.profilePhoto} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: 'transparent',  // Set the navbar background to transparent
      height: 60,
      elevation: 4, // Shadow for Android
      shadowColor: '#000', // Add shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow position for iOS
      shadowOpacity: 0.2, // Shadow opacity
      shadowRadius: 4, // Shadow blur radius
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:"center"
    },
    logo: {
      width: 40,
      height: 40,
      marginRight: 4,
      paddingTop:4,
    },
    logoText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#111', 
      padding: 8.0, // Text color for the logo
    },
    profileContainer: {
      borderRadius: 25,
      overflow: 'hidden',
      width: 40,
      height: 40,
    },
    profilePhoto: {
      width: '100%',
      height: '100%',
    },
  });
  
export default NavBar;
