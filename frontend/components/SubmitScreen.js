import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PushDown from '../common/PushDown';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

export default class SubmitScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={commonStyles.viewStyle}>
      <Image 
        style={styles.bg}
        source={require('../images/bg_color.png')}>
        <PushDown />
        <Placeholder flex={0.5} />
        <Image
          style={styles.logoStyle}
          source={require('../images/logo.png')}
        />
        <Placeholder>
          <Text style={commonStyles.mainTextStyle}>Thanks for sharing! - It will help keep our community healthy!</Text>
        </Placeholder>
        <Placeholder>
          <Button
            onPress={() =>
              navigate('MapScreen', { username: this.props.navigation.state.params.username })
            }
            title='Back to Map'
            main
          />
        </Placeholder>
        <Placeholder flex={0.6} />

      </Image>
      </ScrollView>
    );
  }
}

const styles = {
  logoStyle: {
    height: 84,
    width: 100,
  },
  bg: {
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
};