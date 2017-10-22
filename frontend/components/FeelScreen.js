import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PushDown from '../common/PushDown';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import commonStyles from '../styles/commonstyles';

export default class FeelScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({})
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#EFA649'}}>
      <View>
      <Text style={{color: '#000'}}>How are you feeling?</Text>
       <Button
          onPress={this.handleClick}
          title='Great!'
          main
        />

        <Button
          onPress={this.handleClick}
          title='Not very well'
          main
        />
      </View>
      </ScrollView>
    );
  }
}
