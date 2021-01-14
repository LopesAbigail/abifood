import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
import { Order } from '../Types';
import OrderCard from '../OrderCard';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';

type Props = {
    route: {
        params: {
            order : Order;
        }
    } 
}

export default function OrderDetails({ route } : Props) {
  // Função especial do react 
  const navigation = useNavigation();
  //const order = route.params.order;
  // tecnica destruct:
  const { order } = route.params;

  const handleOnPress = () => {
    navigation.navigate('Orders');
  }

  const handleOnCancel = () => {
    navigation.navigate('Orders');
  }

  // deep link: abre direto o app
  const handleStartNavigation = () => {
      Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude}, ${order.longitude}`);
  }

  const handleConfirmDelivery = () => {
    confirmDelivery(order.id)
        .then(() => {
            Alert.alert(`The delivery ${order.id} has been successfully confirmed!!`);
            navigation.navigate('Orders');
        })
        .catch(() => {
            Alert.alert(`An error has occured with the order ${order.id}.`)
        })
  }

  return (
    <>
        <Header/>
        <View style={styles.container}>
            <OrderCard order={order}/>
            <RectButton style={styles.button} onPress={handleStartNavigation}>
                <Text style={styles.buttonText}>START</Text>
            </RectButton>
            <RectButton style={styles.button} onPress={handleConfirmDelivery}>
                <Text style={styles.buttonText}>CONFIRM DELIVERY</Text>
            </RectButton>
            <RectButton style={styles.button} onPress={handleOnCancel}>
                <Text style={styles.buttonText}>CANCEL</Text>
            </RectButton>
        </View>
    </>
  );
}

// CSS em JavaScript
const styles = StyleSheet.create({
    container: {
      paddingRight: '5%',
      paddingLeft: '5%'
    },
    button: {
      backgroundColor: '#DA5C5C',
      flexDirection: 'row',
      borderRadius: 10,
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFF',
      letterSpacing: -0.24,
      fontFamily: 'OpenSans_700Bold'
    }
  });