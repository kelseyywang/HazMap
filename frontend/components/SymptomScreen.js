import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PushDown from '../common/PushDown';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

export default class SymptomScreen extends React.Component {
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
      <ScrollView style={{backgroundColor: colors.backgroundColor}}>
      <View contentContainerStyle={commonStyles.viewStyle}>
        <PushDown />
        <Placeholder>
          <Text style={commonStyles.bigTextStyle}>Unusual Symptoms?</Text>
        </Placeholder>
         <View style={{flex: 4}}>
          <Text style={commonStyles.titleTextStyle}>Respiratory</Text>

          <Button
            onPress={this.handleClick}
            title='Persistent cough'
            marginSide={25}
            margin={8}
            main
          />

          <Button
            onPress={this.handleClick}
            title='Shortness of breath'
            marginSide={25}
            margin={8}
            main
          />

        <Text style={commonStyles.titleTextStyle}>Dermal and Muscular</Text>

          <Button
            onPress={this.handleClick}
            title='Rash or irritation'
            marginSide={25}
            margin={8}
            main
          />

          <Button
            onPress={this.handleClick}
            title='Stiffness in neck or back'
            marginSide={25}
            margin={8}
            main
          />
          <Text style={commonStyles.titleTextStyle}>Behavioral changes</Text>

            <Button
              onPress={this.handleClick}
              title='Fatigue'
              marginSide={25}
              margin={8}
              main
            />

            <Button
              onPress={this.handleClick}
              title='Memory Loss'
              marginSide={25}
              margin={8}
              main
            />
            <Text style={commonStyles.titleTextStyle}>Eye/Nose/Throat</Text>

            <Button
              onPress={this.handleClick}
              title='Eye irritation'
              marginSide={25}
              margin={8}
              main
            />

            <Button
              onPress={this.handleClick}
              title='Nasal congestion'
              marginSide={25}
              margin={8}
              main
            />

            <Button
              onPress={this.handleClick}
              title='Dry or sore throat'
              marginSide={25}
              margin={8}
              main
            />
            <Text style={commonStyles.titleTextStyle}>Gastrointestinal</Text>

              <Button
                onPress={this.handleClick}
                title='Stomach pain'
                marginSide={25}
                margin={8}
                main
              />

              <Button
                onPress={this.handleClick}
                title='Diarrhea'
                marginSide={25}
                margin={8}
                main
              />
              <Button
                onPress={this.handleClick}
                title='Nausea, dizziness'
                marginSide={25}
                margin={8}
                main
              />

              <Button
                onPress={this.handleClick}
                title='Vomiting'
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
