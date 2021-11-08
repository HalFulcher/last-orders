import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import BarCard from './BarCard';
import { useFonts, ShareTechMono_400Regular } from '@expo-google-fonts/share-tech-mono';
// @ts-ignore
import { REACT_APP_API_KEY } from "react-native-dotenv";
import axios from 'axios';
import * as geolib from 'geolib';
import LoadingScreen from './LoadingScreen';


export default function App() {


const [orderedBars, setOrderedBars] = useState<any | null>([]);

const [barList, setBarList] = useState<any | null>([]);
const [geolocation, setGeolocation] = useState<any | null>(null);
const [status, setStatus] = useState<any | null>(null);

// get geolocation and set geoLocation state with response

const getLocation = () => {
  if (!navigator.geolocation) {
    setStatus('Geolocation is not supported by your browser');
  } else {
    setStatus('Locating...');
    navigator.geolocation.getCurrentPosition((position) => {
      setStatus(null);
      setGeolocation(position.coords)
      
    }, () => {
      setStatus('Unable to retrieve your location');
    });
  }
}

useEffect(() => {
  getLocation()
}, [])



useEffect(() => {
  if(geolocation){
    const getNearbyBars = async () => {
     
      
      
      const proxyurl = "https://desolate-badlands-15558.herokuapp.com/";
     
     
      const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      const rankByDistance = 'rankby=distance'
      const location = `&location=${geolocation.latitude},${geolocation.longitude}`;
      // const radius = '&radius=1000'; 

      const type = '&keyword=bar';
      const openNow = '&opennow'
      const API_KEY = '';
      const barSearchUrl = proxyurl + url + rankByDistance + location + type + openNow + API_KEY;
  
      const response = await fetch(barSearchUrl);
      const barsObj = await response.json();
      const barsArr = barsObj.results;   
      setBarList(barsArr)


      };
      getNearbyBars();
  }
  
  }, [geolocation]);

  console.log(barList)

   
  let [fontsLoaded, error] = useFonts({
    ShareTechMono_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 









  return (

   <View style={styles.container}>
     <View style={styles.textborder}>
      <Text style={{fontFamily: 'Helvetica', fontWeight: 'bold',
  fontSize: 30,
  color: 'black', textAlign: 'center'}}>
  Thirsty? </Text>
  <Text style={{fontFamily: 'Helvetica', fontWeight: 'bold',
  fontSize: 18, padding: 10,
  color: 'black', textAlign: 'center'}}>These bars near you are still open:
  </Text>
      <StatusBar style="auto" />     


<View>
{status !== null ? (
  <LoadingScreen />
) : (
  <View>

{barList.map((bar, index) => (
<BarCard barData={bar} key={index} geolocation={geolocation}/>



))}

  </View>
)
}

</View>




{/* <View>
{barList.map((bar, index) => (
<BarCard barData={bar} key={index} geolocation={geolocation}/>



))}
            
</View> */}

            </View>
    </View>
   
      )
  }


const styles = StyleSheet.create({


  textborder: {
top: 30
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







