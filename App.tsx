import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarCard from './BarCard';

export default function App() {
  return (

   <View style={styles.container}>
      <Text style={styles.title}>Thirsty? These bars near you are still open:</Text>
      <Text style={styles.title2}>You are searching postcode. Change location</Text>
      <StatusBar style="auto" />
            <BarCard />      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F3FA',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',   

  },

title: {

},

title2: {

}

  
});
