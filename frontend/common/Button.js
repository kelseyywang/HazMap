import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';

//BUTTON:
//needs props: title, onPress
//optional: main (makes it the main color as opposed to normal color), margin
export default class Button extends React.Component {
  render() {
    const {textStyle, buttonStyle } = styles;
    if (this.props.main) {
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
          style={[buttonStyle,
            {borderColor: colors.mainButtonTextColor,
              backgroundColor: colors.mainButtonColor,
              marginLeft: (this.props.marginSide || 5),
              marginRight: (this.props.marginSide || 5),
              marginTop: (this.props.margin || 5),
              marginBottom: (this.props.margin || 5),
            }]}
        >
          <Text style={[textStyle, {color: colors.mainButtonTextColor}]}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[buttonStyle,
          {borderColor: colors.mainButtonTextColor,
            backgroundColor: colors.secondaryButtonColor,
            marginLeft: (this.props.marginSide || 5),
            marginRight: (this.props.marginSide || 5),
            marginTop: (this.props.margin || 5),
            marginBottom: (this.props.margin || 5),
          }]}
      >
        <Text style={[textStyle, {color: colors.secondaryButtonTextColor}]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
};
