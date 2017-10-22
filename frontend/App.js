import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapScreen from './components/MapScreen';
import SymptomScreen from './components/SymptomScreen'
import FeelScreen from './components/FeelScreen'
import Login from './components/Login';

export default class App extends React.Component {
  render() {
    return <HazMap />;
  }
}

const HazMap = StackNavigator({
  Login: { screen: Login },
  MapScreen: { screen: MapScreen },
  FeelScreen: { screen: FeelScreen},
  SymptomScreen: { screen: SymptomScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
