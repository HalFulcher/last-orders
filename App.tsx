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
  fontSize: 15,
  color: 'black', textAlign: 'center'}}>
  Thirsty? These bars near you are still open:</Text>
      <Text style={styles.title2}>Change location</Text>
      <StatusBar style="auto" />
            <BarCard /> 
            <BarCard /> 
            <BarCard />      
            <BarCard />      
            <BarCard />      

<Text style={styles.title2}>Load more bars...</Text>

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

   
  },

title: {
  
  // fontFamily: 'ShareTechMono_400Regular',
},

title2: {
paddingTop: '5px',
color: '#19A6F5',
fontSize: 10,
textAlign: 'center'
}

  
});
