import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PushDown from '../common/PushDown';

export default class SymptomScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <PushDown />
        <Text>This is Symptom Screen</Text>
      </View>
    );
  }
}
