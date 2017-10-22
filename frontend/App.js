import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapScreen from './components/MapScreen';
import SymptomScreen from './components/SymptomScreen'


export default class App extends React.Component {
  render() {
    return <HazMap />;
  }
}

const HazMap = StackNavigator({
  MapScreen: { screen: MapScreen },
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
