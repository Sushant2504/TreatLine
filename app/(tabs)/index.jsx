import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { HelloWave } from '@/components/HelloWave';
import NavBar from '../../components/NavBar'; 
import Header from '../components/homeHeader'
import SearchBar from '../components/SearchBar'
import Categories from '../components/categories'
import PremiumHospital from '../components/PremiumHospitals'



const HomeScreen = () => {


  return (
    
    <ScrollView>
       <NavBar/>
       
      <Header />

      <SearchBar/>

      <View style={styles.img}>
      <Image source={{ uri: "https://img.freepik.com/free-vector/patient-taking-medical-examination-clinic_52683-57179.jpg?uid=R144673261&ga=GA1.1.1951753748.1737620454&semt=ais_hybrid"}} height={230} width={360} style={styles.content}></Image>
      </View>

      <Categories/>
      <View style={styles.verticalSpacer} />


      <PremiumHospital/>

      
    </ScrollView>

  );
}




const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  verticalSpacer: {
      height: 20,
  },



  // image part

  content: {
       justifyContent: 'center',
      //  display: 'flex', 
       borderRadius: 12.0,
  },


  img: {
    borderRadius: 12.0,
    padding: 12.0,
    justifyContent: 'center',
  }

  /// 

});


export default HomeScreen;
