import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PushDown from '../common/PushDown';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import commonStyles from '../styles/commonstyles';

export default class EnvironmentScreen extends React.Component {
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
      <Text>Anything unusual in your area?</Text>
      <View style={{flex: 2, flexDirection: 'row'}}>
       <View style={{flex: 1}}>
        <Text>Respiratory</Text>
        
        <Button
          onPress={this.handleClick}
          title='Persistent cough'
          main
        />

        <Button
          onPress={this.handleClick}
          title='Shortness of breath'
          main
        />
        </View>

        <View style={{flex: 1}}>
       <Text>Eye/Nose/Throat</Text>

          <Button
            onPress={this.handleClick}
            title='Eye irritation'
            main
          />

          <Button
            onPress={this.handleClick}
            title='Nasal congestion'
            main
          />

          <Button
            onPress={this.handleClick}
            title='Dry or sore throat'
            main
          />

        </View>
      </View>
      </ScrollView>
    );
  }
}
