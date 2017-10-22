import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapScreen from './components/MapScreen';
import SymptomScreen from './components/SymptomScreen'
import FeelScreen from './components/FeelScreen'


export default class App extends React.Component {
  render() {
    return <HazMap />;
  }
}

const HazMap = StackNavigator({
  FeelScreen: { screen: FeelScreen},
  SymptomScreen: { screen: SymptomScreen },
  MapScreen: { screen: MapScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
