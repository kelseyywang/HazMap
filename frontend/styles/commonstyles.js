import colors from './colors';

const commonStyles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  errorTextStyle: {
    margin: 15,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    color: colors.errorTextColor,
  },
};

export default commonStyles;
