import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PushDown from '../common/PushDown';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import commonStyles from '../styles/commonStyles';

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
       <View style={commonStyles.viewStyle}>
        <Text>Air</Text>

        <Button
          onPress={this.handleClick}
          title='Smoke'
          main
        />

        <Button
          onPress={this.handleClick}
          title='Haze'
          main
        />

       <Text>Water</Text>

          <Button
            onPress={this.handleClick}
            title='Abnormal smell or taste'
            main
          />

          <Button
            onPress={this.handleClick}
            title='Discolored water'
            main
          />

          <Button
            onPress={this.handleClick}
            title='Stagnant water'
            main
          />

        <Text>Contaminant Exposure</Text>

          <Button
            onPress={this.handleClick}
            title='Mold, Bacteria Growth'
            main
          />

          <Button
            onPress={this.handleClick}
            title='Chemical Spills'
            main
          />

        <Text>Pests</Text>

          <Button
            onPress={this.handleClick}
            title='Rodents'
            main
          />

          <Button
            onPress={this.handleClick}
            title='Insects'
            main
          />

      </View>
      </ScrollView>
    );
  }
}
