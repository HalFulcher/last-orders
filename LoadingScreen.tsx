import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import BarCard from './BarCard';
import { useFonts, ShareTechMono_400Regular } from '@expo-google-fonts/share-tech-mono';
// @ts-ignore
import * as geolib from 'geolib';

export default function LoadingScreen() {

return(
    
<View style = {{
    justifyContent: 'center',
    alignItems: 'center'}}>

<Text style={{fontFamily: 'Helvetica', textAlign: 'center', fontWeight: '400', fontSize: 16, justifyContent: 'center'
 }}>Loading...</Text>
</View>

)


}


// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });
