import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    width:screenWidth-140,
    justifyContent: 'space-between',
  },
  text:{
    color:'white',
  },
  buttons:{
    display:'flex',
    flexDirection:'column',
  }
});
