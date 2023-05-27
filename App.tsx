import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';


import AppNavigator from './src/AppNavigator';
export default function App() {
  return (
    // <GestureHandlerRootView style={{flex: 1}}>
      <AppNavigator />
  // </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
