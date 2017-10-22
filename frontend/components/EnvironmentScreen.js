import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PushDown from '../common/PushDown';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

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
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor: colors.backgroundColor}}>
      <View contentContainerStyle={commonStyles.viewStyle}>
        <PushDown />
        <Placeholder>
          <Text style={commonStyles.bigTextStyle}>Anything unusual in your area?</Text>
        </Placeholder>
         <View style={{flex: 4}}>
          <Text style={commonStyles.titleTextStyle}>Air</Text>

          <Button
            onPress={this.handleClick1}
            title='Smoke'
            marginSide={25}
            margin={8}
            main
          />

          <Button
            onPress={this.handleClick2}
            title='Haze'
            marginSide={25}
            margin={8}
            main
          />

        <Text style={commonStyles.titleTextStyle}>Water</Text>

          <Button
            onPress={this.handleClick3}
            title='Stagnant Water'
            marginSide={25}
            margin={8}
            main
          />

          <Button
            onPress={this.handleClick4}
            title='Discolored Water'
            marginSide={25}
            margin={8}
            main
          />

          <Button
            onPress={this.handleClick4}
            title='Abnormal smell or taste'
            marginSide={25}
            margin={8}
            main
          />

          <Text style={commonStyles.titleTextStyle}>Contaminant Exposure</Text>

            <Button
              onPress={this.handleClick5}
              title='Mold, Bacteria Growth'
              marginSide={25}
              margin={8}
              main
            />

            <Button
              onPress={this.handleClick6}
              title='Chemical Spills'
              marginSide={25}
              margin={8}
              main
            />
            <Text style={commonStyles.titleTextStyle}>Pests</Text>

            <Button
              onPress={this.handleClick7}
              title='Rodents'
              marginSide={25}
              margin={8}
              main
            />

            <Button
              onPress={this.handleClick8}
              title='Insects'
              marginSide={25}
              margin={8}
              main
            />

          <Text style={commonStyles.titleTextStyle}>Other</Text>
            <Button
              onPress={this.handleClick9}
              title='Other'
              marginSide={25}
              margin={8}
              main
            />

          <Button
              onPress={() => navigate('MapScreen', { username: this.props.navigation.state.params.username })}
              title='SUBMIT'
              marginSide={25}
              margin={8}
              main
            />

          <Button
              onPress={() => navigate('MapScreen', { username: this.props.navigation.state.params.username })}
              title='BACK'
              marginSide={25}
              margin={8}
              main
            />

            <PushDown />
          </View>
        </View>
      </ScrollView>
    );
  }
}
