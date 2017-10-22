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
  bigTextStyle: {
    margin: 5,
    fontSize: 25,
    textAlign: 'center',
    lineHeight: 40,
    color: colors.mainTextColor,
  },
  titleTextStyle: {
    margin: 15,
    marginTop: 30,
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 30,
    color: colors.mainTextColor,
  },
  mainTextStyle: {
    margin: 15,
    width: 300,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    color: colors.mainTextColor,
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
