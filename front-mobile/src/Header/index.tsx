import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/icon.png')} />
        <Text style={styles.text}>AbiFood</Text>
    </View>
  );
}
// CSS em JavaScript
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 100,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center'
    
  },
  text:{
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: -0.24,
    color: '#FFF',
    marginLeft: 15,
    fontFamily: 'OpenSans_700Bold',
  }
});
