import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

export default function Home() {

  // Função especial do react 
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Orders');
  }

  return (
    <>
      <Header/>
      <View style={styles.container}>
        <Image source={require('../assets/deliveryman.png')} />
        <Text style={styles.title}>Track your orders and deliver on time!</Text>
        <Text style={styles.subTitle}>Receive all your restaurant orders {'\n'}in the palm of your hand</Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>VIEW ORDERS</Text>
        </RectButton>
      </View>
    </>
  );
}
// CSS em JavaScript
const styles = StyleSheet.create({
    container: {
      marginTop: '5%',
      alignItems: 'center'
    },
    title: {
      color: '#263238',
      fontSize: 26,
      lineHeight: 35,
      fontWeight: 'bold',
      marginTop: 31,
      textAlign: 'center'
    },
    subTitle: {
      color: '#9E9E9E',
      fontSize: 16,
      marginTop: 15,
      lineHeight: 22,
      textAlign: 'center'
    },
    footer: {
      marginTop: '5%',
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#DA5C5C',
      flexDirection: 'row',
      borderRadius: 10
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFF',
      letterSpacing: -0.24
    }
});
