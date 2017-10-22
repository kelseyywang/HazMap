import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PushDown from '../common/PushDown';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import commonstyles from '../styles/commonstyles'

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={commonstyles.viewStyle}>
        <PushDown />
        <Placeholder>
          <Button
            onPress={() => {}}
            title='Button1'
            main
          />
        </Placeholder>
        <Placeholder>
          <Text>This is map screen!</Text>
        </Placeholder>
      </View>
    );
  }
}
