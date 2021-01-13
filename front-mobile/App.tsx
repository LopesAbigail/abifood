import React from 'react';
import { useFonts, OpenSans_400Regular_Italic, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Routes';


// view é uma "div", bloco
export default function App() {
  // Tentanndo carregar a fonte
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular_Italic,
    OpenSans_700Bold
  });

  // Enquanto a fonte não for carregada,
  // mostrar loading na tela
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Routes/>
    </View>
  );
}
// CSS em JavaScript
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
