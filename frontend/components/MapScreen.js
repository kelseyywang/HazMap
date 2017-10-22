import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { StackNavigator } from 'react-navigation';
import PushDown from '../common/PushDown';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';
import commonstyles from '../styles/commonstyles';
import colors from '../styles/colors';
import Spinner from '../common/Spinner';


export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      initialLat: 0,
      initialLon: 0,
      region: {
        latitude: 37.427,
        longitude: -122.170,
        latitudeDelta: 0.1,
        longitudeDelta: 0.04,
      }
    };
    //Firebase configuration
    // const config = {
    //   something
    // };
    this.onRegionChange = this.onRegionChange.bind(this)
  }

  componentDidMount() {
    console.log("USER" + this.props.navigation.state.params.username);
    this.correctLocInterval = setInterval(this.update.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.correctLocInterval);
  }

  update() {
    this.setPos();
  }

  onRegionChange(region) {
      this.setState({ region: region })
  }

  setPos() {
    console.log(this.state.initialLat);
    console.log(this.state.initialLon);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({region: {
          latitude: this.state.region.latitude,
          longitude: this.state.region.longitude,
          latitudeDelta: this.state.region.latitudeDelta,
          longitudeDelta: this.state.region.longitudeDelta,
        }});
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  renderMap() {
    return (
      <MapView
        provider="google"
        style={commonstyles.map}
        showsUserLocation
        region={this.state.region}
        onRegionChange={this.onRegionChange}
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
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={commonstyles.viewStyle}>
        <PushDown />
        <Placeholder>
          {this.renderMap()}
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
