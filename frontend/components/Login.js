import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import PushDown from '../common/PushDown';
import { StackNavigator } from 'react-navigation';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import Spinner from '../common/Spinner';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import { Input } from '../common';


export default class SymptomScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      loggedIn: false, 
    };
  }

  onButtonPress() {
    const { navigate } = this.props.navigation;
    const {email, password} = this.state;
    this.setState({ error: '', loading: true });
    navigate('MapScreen', {username: this.state.email});
  }

  resetForm() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

renderButton() {
  if (this.state.loading) {
    return <Spinner size="small" />;
  }
  return (
    <Button
      onPress={this.onButtonPress.bind(this)}
      title='Log In'
      main
    />
  );
}

renderForm() {
  return (
    <View style={commonStyles.viewStyle}>
      <Image 
        style={styles.bg}
        source={require('../images/bg_color.png')}>
      <PushDown />
      <Placeholder flex={1} />
      <Placeholder>
        <Image
          style={styles.logoStyle}
          source={require('../images/logo.png')}
        />
      </Placeholder>
      <Placeholder>
      </Placeholder>
      <Placeholder
        noJustify
        flex={1.5}
      >
        <Input
          placeholder="enter username"
          label="Username"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          keyboardType='email-address'
        >
        </Input>

        <Input
          secureTextEntry
          placeholder="enter password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          label="Password"
        />
    </Placeholder>
      <Placeholder>
        <Text style={commonStyles.errorTextStyle}>
          {this.state.error}
        </Text>
        {this.renderButton()}
      </Placeholder>
      <Placeholder />
    </Image>
    </View>
  );
}

render() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={commonStyles.viewStyle}>
        {this.renderForm()}
      </View>
    </TouchableWithoutFeedback>
  );
}
}

const styles = {
  logoStyle: {
    height: 168,
    width: 200,
  },
  bg: {
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
