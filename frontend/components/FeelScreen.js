import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PushDown from '../common/PushDown';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

export default class FeelScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({

    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={commonStyles.viewStyle}>
        <Image 
        style={styles.bg}
        source={require('../images/bg_color.png')}>
        <PushDown />
        <Placeholder flex={1} />
        <Placeholder>
          <Text style={commonStyles.mainTextStyle}>Would you like to report any problems?</Text>
         <Button
            onPress={() =>
              navigate('SymptomScreen', { username: this.props.navigation.state.params.username })
            }
            title='Report Symptoms'
            margin={20}
            main
          />
          
        </Placeholder>
        <Placeholder>
          <Button
            onPress={() =>
              navigate('EnvironmentScreen', { username: this.props.navigation.state.params.username })
            }
            title='Report Environmental Problems'
            main
          />
        </Placeholder>
        <Placeholder flex={2} />
        </Image>
      </ScrollView>
    );
  }
}

const styles = {
  bg: {
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
