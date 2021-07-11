import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View } from 'react-native';
// import Button from './Button';

export default function BarCard() {
    return (   
      <View style={styles.container}>
      <View style={styles.barinfo}>
        <Text style={{fontFamily: 'ShareTechMono_400Regular', fontWeight: '500', fontSize: 20, paddingBottom: '5px', color: 'white', textShadowColor: 'rgba(0, 0, 0, 0.75)',
         textShadowOffset: {width: -1, height: 1},
         textShadowRadius: 10}}>$Bar Name</Text>
        <Text style={styles.bardetails}>Address:</Text>
        <Text style={styles.bardetails}>Google rating:</Text>
        <Text style={styles.bardetails}>Closing time:</Text>
        <Text style={styles.bardetails}>Distance:</Text>
       </View>
<View>       
        
<TouchableOpacity
        style={styles.button}
        onPress={() => alert('Opens Google Maps')} 
      >
        <Text style={{color: '#F2271A', fontFamily: 'ShareTechMono_400Regular'}}>TAKE ME THERE</Text>
      </TouchableOpacity>
      
      </View>
      </View>
    );
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
        paddingBottom: '2px' 
    },

    button: {
       backgroundColor: '#F6F3FA',
       padding: '7px',
       borderWidth: 1,
       borderColor: 'black' 
      },
  });