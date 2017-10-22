import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
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
    this.setPos();
    this.correctLocInterval = setInterval(this.setCorrectLoc.bind(this), 1000);
  }

  setCorrectLoc() {
    if (this.state.initialLat === 0 || this.state.initialLon) {
      this.setPos();
      clearInterval(this.correctLocInterval);
    }
  }

  setPos() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("pos", position.coords.latitude);
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
    console.log("pos2", this.state.initialLat);
    console.log("pos3", this.state.initialLon);

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
            onPress={() => {}}
            title='Button1'
            main
          />
          <Text>This is map screen!</Text>
        </Placeholder>
      </View>
    );
  }
}
