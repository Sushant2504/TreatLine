import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router/stack';
import NavBar from '../components/NavBar';
import { MenuProvider } from 'react-native-popup-menu' // Assuming NavBar component is located here

export default function Layout() {
  return (
    <View style={styles.container}>
      <MenuProvider>
        <Stack initialRouteName="SignUp">
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false }} // Hide NavBar for signUp
          />

          {/* Onboarding Screen: No NavBar */}
          <Stack.Screen
            name="onboard"
            options={{
              headerShown: false,
            }}
          />

          {/* Tab Screen: NavBar shown */}
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
              header: () => <NavBar />, // Show NavBar for tabs screen
            }}
          />

          {/* SignIn Screen: No NavBar */}
          <Stack.Screen
            name="SignIn"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="BookingScreen"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="PaymentScreen"
            options={{
              headerShown: false,
            }}
          />



        </Stack>

      </MenuProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
