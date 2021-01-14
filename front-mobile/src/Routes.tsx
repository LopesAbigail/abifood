import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Orders from "./Orders";
import OrderDetails from './OrderDetails';

const Stack = createStackNavigator();

export default function Routes() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        headerMode="none" 
        screenOptions={{ cardStyle: {
             backgroundColor: '#FFF'}
          }}>
          <Stack.Screen component={Home} name="Home"></Stack.Screen>
          <Stack.Screen component={Orders} name="Orders"></Stack.Screen>
          <Stack.Screen component={OrderDetails} name="OrderDetails"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}