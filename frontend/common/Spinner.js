import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import colors from '../styles/colors';

export default class Spinner extends React.Component {
  render() {
    return (
        <View style = {styles.spinnerStyle}>
          <ActivityIndicator
            size={'small'}
            color={"white"}
          />
        </View>
    );
  }
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
