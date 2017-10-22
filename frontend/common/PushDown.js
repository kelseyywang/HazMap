import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

export default class PushDown extends React.Component {
  render() {
    return (
      <View style={styles.pushStyle}></View>
    );
  }
}

const styles = StyleSheet.create({
  pushStyle: {
    ...Platform.select({
      ios: {
        height: 20,
      },
      android: {
        height: 25,
      },
      windows: {
        paddingTop: 25,
      },
    })
  },
});
