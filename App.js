import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet,  Text,  View } from 'react-native';
import Navigation from './src/navigation/StackNavigator';

export default function App() {
  return (
    <>
   
      <Navigation/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
