import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PushDown from '../common/PushDown';
import Placeholder from '../common/Placeholder';
import {Input} from '../common/Input';
import Button from '../common/Button';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

export default class SymptomScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      s1: false,
      s2: false,
      s3: false,
      s4: false,
      s5: false,
      s6: false,
      s7: false,
      s8: false,
      s9: false,
      s10: false,
      s11: false,
      s12: false,
      s13: false,
      other: '',
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
    this.handleClick7 = this.handleClick7.bind(this);
    this.handleClick8 = this.handleClick8.bind(this);
    this.handleClick9 = this.handleClick9.bind(this);
    this.handleClick10 = this.handleClick10.bind(this);
    this.handleClick11 = this.handleClick11.bind(this);
    this.handleClick12 = this.handleClick12.bind(this);
    this.handleClick13 = this.handleClick13.bind(this);

  }

  submit() {

  }

  handleClick1() {
    this.setState({
      s1: !this.state.s1,
    });
  }
  handleClick2() {
    this.setState({
      s2: !this.state.s2,
    });
  }
  handleClick3() {
    this.setState({
      s3: !this.state.s3,
    });
  }
  handleClick4() {
    this.setState({
      s4: !this.state.s4,
    });
  }
  handleClick5() {
    this.setState({
      s5: !this.state.s5,
    });
  }
  handleClick6() {
    this.setState({
      s6: !this.state.s6,
    });
  }
  handleClick7() {
    this.setState({
      s7: !this.state.s7,
    });
  }
  handleClick8() {
    this.setState({
      s8: !this.state.s8,
    });
  }
  handleClick9() {
    this.setState({
      s9: !this.state.s9,
    });
  }
  handleClick10() {
    this.setState({
      s10: !this.state.s10,
    });
  }
  handleClick11() {
    this.setState({
      s11: !this.state.s11,
    });
  }
  handleClick12() {
    this.setState({
      s12: !this.state.s12,
    });
  }
  handleClick13() {
    this.setState({
      s13: !this.state.s13,
    });
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
            onPress={this.handleClick1}
            title='Persistent cough'
            marginSide={25}
            margin={8}
            main={!this.state.s1}
          />

          <Button
            onPress={this.handleClick2}
            title='Shortness of breath'
            marginSide={25}
            margin={8}
            main={!this.state.s2}
          />

        <Text style={commonStyles.titleTextStyle}>Dermal and Muscular</Text>

          <Button
            onPress={this.handleClick3}
            title='Rash or irritation'
            marginSide={25}
            margin={8}
            main={!this.state.s3}
          />

          <Button
            onPress={this.handleClick4}
            title='Stiffness in neck or back'
            marginSide={25}
            margin={8}
            main={!this.state.s4}
          />
          <Text style={commonStyles.titleTextStyle}>Behavioral changes</Text>

            <Button
              onPress={this.handleClick5}
              title='Fatigue'
              marginSide={25}
              margin={8}
              main={!this.state.s5}
            />

            <Button
              onPress={this.handleClick6}
              title='Memory Loss'
              marginSide={25}
              margin={8}
              main={!this.state.s6}
            />
            <Text style={commonStyles.titleTextStyle}>Eye/Nose/Throat</Text>

            <Button
              onPress={this.handleClick7}
              title='Eye irritation'
              marginSide={25}
              margin={8}
              main={!this.state.s7}
            />

            <Button
              onPress={this.handleClick8}
              title='Nasal congestion'
              marginSide={25}
              margin={8}
              main={!this.state.s8}
            />

            <Button
              onPress={this.handleClick9}
              title='Dry or sore throat'
              marginSide={25}
              margin={8}
              main={!this.state.s9}
            />
            <Text style={commonStyles.titleTextStyle}>Gastrointestinal</Text>

              <Button
                onPress={this.handleClick10}
                title='Stomach pain'
                marginSide={25}
                margin={8}
                main={!this.state.s10}
              />

              <Button
                onPress={this.handleClick11}
                title='Diarrhea'
                marginSide={25}
                margin={8}
                main={!this.state.s11}
              />
              <Button
                onPress={this.handleClick12}
                title='Nausea, dizziness'
                marginSide={25}
                margin={8}
                main={!this.state.s12}
              />

              <Button
                onPress={this.handleClick13}
                title='Vomiting'
                marginSide={25}
                margin={8}
                main={!this.state.s13}
              />
            <Text style={commonStyles.titleTextStyle}>Other:</Text>

              <Input
                placeholder="Please specify"
                value={this.state.other}
                onChangeText={other => this.setState({ other })}
                label=''
              />
            <PushDown />
            <PushDown />
            <PushDown />
              <Button
                onPress={this.submit.bind(this)}
                title='Submit'
                marginSide={80}
                margin={20}
                main
              />
            <PushDown />
          </View>
        </View>
      </ScrollView>
    );
  }
}
