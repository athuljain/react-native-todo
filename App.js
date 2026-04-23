import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootRoute from './RootRoute';

export default function App() {
  return (
 <NavigationContainer>
  <StatusBar />
  <RootRoute />
 </NavigationContainer>
  );
}

