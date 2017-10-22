import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { StackNavigator } from 'react-navigation';
import PushDown from '../common/PushDown';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import commonstyles from '../styles/commonstyles'
import colors from '../styles/colors'

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      initialLat: 0,
      initialLon: 0,
    };
    //Firebase configuration
    // const config = {
    //   something
    // };
  }

  componentDidMount() {
    this.correctLocInterval = setInterval(this.update.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.correctLocInterval);
  }

  update() {
    this.setPos();
  }

  setPos() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          initialLat: position.coords.latitude,
          initialLon: position.coords.longitude
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={commonstyles.viewStyle}>
        <PushDown />
        <Placeholder>
          <MapView
            provider="google"
            style={commonstyles.map}
            showsUserLocation
            region={{
              latitude: this.state.initialLat,
              longitude: this.state.initialLon,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <MapView.Circle
              center={{
                latitude: this.state.initialLat,
                longitude: this.state.initialLon
              }}
              radius={100}
              fillColor={colors.circleColor}
              strokeColor={colors.circleColor}
            />
          </MapView>
        </Placeholder>
        <Placeholder>
          <Button
            onPress={() => navigate('SymptomScreen')}
            title='Check In'
            main
          />
        </Placeholder>
      </View>
    );
  }
}
