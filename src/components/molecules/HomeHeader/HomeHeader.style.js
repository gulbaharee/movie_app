import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
export default StyleSheet.create({
  container: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    width: screenWidth,
    top: 0,
  },
  tabContainer: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    marginLeft: 75,
  },
});
