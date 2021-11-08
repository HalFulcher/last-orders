import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Linking } from 'react-native';
// import BarCardItem from './BarCardItem';
import * as geolib from 'geolib';

export default function BarCard({barData, geolocation}) {


  const [barDistance, setBarDistance] = useState<any | null>();
  

  function mapName (barName){
    let baseName = 'https://www.google.com/maps/dir/?api=1&destination='
    let travelMode = '&travelmode=walking'
    let nameArr = barName.split(' ')    
    let barNameArr = [];    
    for(let word of nameArr){
      barNameArr.push(`${word}+`)
    }
    let joinedFinal = barNameArr.join('')
    
    let answer = joinedFinal.substring(0, joinedFinal.length-1)
    
    return baseName + answer + travelMode;
      
    }



    function distance(){
    
    
      return geolib.getDistance({latitude: geolocation.latitude, longitude: geolocation.longitude}, {
              latitude: barData.geometry.location.lat,
              longitude: barData.geometry.location.lng
          })
          
  
    }


useEffect(() => {
if(geolocation && barData){
setBarDistance(distance());
}
}, [])

if(!barData){
  return (
    <View><Text style={styles.bardetails}>No bars open... Go home, you're drunk!</Text></View>
  )
}
 else { return (


  <View style={styles.container}>
  <View style={styles.barinfo}>
  <Text style={{fontFamily: 'Helvetica', textAlign: 'center', fontWeight: '800', fontSize: 20, paddingBottom: '5px', color: 'white', textShadowColor: 'rgba(0, 0, 0, 0.75)',
         textShadowOffset: {width: -1, height: 1},
         }}>{barData.name}</Text>
        <Text style={styles.bardetails}><b>Google rating:</b> {barData.rating}</Text>
        <Text style={styles.bardetails}><b>Address:</b> {barData.vicinity}</Text>
        <Text style={styles.bardetails}><b>Distance:</b> {barDistance} metres</Text>

        <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(mapName(barData.name))} 
      >
        <Text style={{color: 'black', fontFamily: 'Helvetica', fontWeight: '600', fontSize: 13, textAlign: 'center'}}>TAKE ME THERE</Text>
      </TouchableOpacity>

       </View>
       </View>  )}     
}

    

const styles = StyleSheet.create({

    container: {
    flexDirection: 'row',
    backgroundColor: '#CE5D44',
    alignItems: 'center',
    padding: '20px',
    marginTop: '10px'
    },
    
        barinfo: {
          flex: 1,
          
    
      
        },
    
        bardetails: {
            fontSize: 10,
            paddingLeft: '10px', 
            paddingRight: '10px',
            paddingBottom: '5px'
          },
    
        button: {
           backgroundColor: '#F6F3FA',
           padding: '7px',
           borderWidth: 1,
           marginLeft: 
          90,
           marginRight: 90,
           borderColor: 'black', 
           marginTop: '5px'
          },
      });






  