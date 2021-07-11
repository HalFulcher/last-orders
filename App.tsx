import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import BarCard from './BarCard';
import { useFonts, ShareTechMono_400Regular } from '@expo-google-fonts/share-tech-mono';



export default function App() {

  let [fontsLoaded, error] = useFonts({
    ShareTechMono_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 


  return (

   <View style={styles.container}>
     <View style={styles.textborder}>
      <Text style={{fontFamily: 'ShareTechMono_400Regular', fontWeight: 'bold',
  fontSize: 17,
  color: 'black'}}>
  Thirsty? These bars near you are still open:</Text>
      <Text style={styles.title2}>Change location</Text>
      <StatusBar style="auto" />
            <BarCard />      
            </View>
    </View>
    

  );
}


const styles = StyleSheet.create({


  textborder: {
top: 70
  },
 
  container: {
    backgroundColor: '#F6F3FA',
    flex: 1,

    alignItems: 'center',

    // justifyContent: 'center',   

  },

title: {
  
  // fontFamily: 'ShareTechMono_400Regular',
},

title2: {
color: '#19A6F5',
fontSize: 12
}

  
});
