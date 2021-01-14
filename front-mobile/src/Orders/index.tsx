import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../Types';

export default function Orders() {

  const [orders, setOrders] =  useState<Order[]>([]);
  const [isloading, setIsloading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused(); //Renderizar tela: quando a tela é selecionada, recebe true, senão, false.

  const fetchData = () => {
    setIsloading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('An error has occurred while loading the products :('))
      .finally(() => setIsloading(false));
  }

  // Sempre que o valor de isFocused for alterado
  // executa o código (renderiza)
  useEffect(() => {
    if(isFocused){
      fetchData();
    }
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', {
      order
    });
  }

  return (
    <>
      <Header/>
      <ScrollView style={styles.container}>
        {isloading ? (
          <Text style={styles.text}>Search orders...</Text>
        ) : (
          orders.map(order => (
            <TouchableWithoutFeedback key={order.id} onPress={() => {handleOnPress(order)}}>
              <OrderCard order={order}/>
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
    </>
    
  );
}
// CSS em JavaScript
const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  text: {
    fontWeight: 'normal',
    fontSize: 30,
    lineHeight: 250,
    letterSpacing: -0.24,
    color: '#9E9E9E',
    textAlign: 'center'
  }
});