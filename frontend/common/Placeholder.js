import React from 'react';
import { StyleSheet, View } from 'react-native';

//PLACEHOLDER
//Optional props: noJustify, flex (if not 1)
export default class Placeholder extends React.Component {
  render() {
    if (this.props.noJustify) {
      return (
        <View style={[{flex: (this.props.flex || 1)}, styles.placeholderNJStyle]}>
          {this.props.children}
        </View>
      );
    }
    return (
      <View style={[{flex: (this.props.flex || 1)}, styles.placeholderStyle]}>
        {this.props.children}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  placeholderStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderNJStyle: {
    alignSelf: 'stretch',
  },
});
