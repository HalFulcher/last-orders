import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
// import Button from './Button';

export default function BarCard() {
    return (
<View>    
      {/* <View style={styles.container}> */}
        <Text>Bar Card Component</Text>
        <Button
        title="TAKE ME THERE"
        onPress={() => alert('Button pressed')}
      />
      </View>
    );
  }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#F6F3FA',
//       alignItems: 'center',
//       justifyContent: 'center',
  
//     },
//   });