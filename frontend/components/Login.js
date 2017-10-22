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

    // Post to server
    const loginRoute = `http://10.21.153.16:3000/users`;
    fetch(loginRoute, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: this.state.email,
        },
      }),
    }).then((response) => {
      console.log(response);
      if (response.ok === true) {
        return response.json();
      } else {
        console.error(response);
      }
    }).then((json) => {
      console.log(json);
    }).catch((error) => {
      console.error(error);
    });
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
          placeholder="user"
          label="Username"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          keyboardType='email-address'
        >
        </Input>

        <Input
          secureTextEntry
          placeholder="password"
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
};
