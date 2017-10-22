import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
        <PushDown />
        <Placeholder flex={0.5} />
        <Placeholder>
          <Text style={commonStyles.mainTextStyle}>Thanks for submitting your problem - it will help keep your community more healthy!</Text>
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
      </ScrollView>
    );
  }
}
