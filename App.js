import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_500Medium, Poppins_300Light } from '@expo-google-fonts/poppins';
import TodoListScreen from './src/screens/TodoListScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_300Light
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TodoListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
