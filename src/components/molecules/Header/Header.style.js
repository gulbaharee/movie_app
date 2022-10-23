import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  iconContainer: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 30,
    width: screenWidth - 60,
    justifyContent: 'flex-end',
  },
  netflix: {
    height:40,
    width:40,
    marginRight:230,
  },
});
