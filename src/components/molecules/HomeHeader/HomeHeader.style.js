import {StyleSheet,Dimensions} from 'react-native';

const screenWidth= Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    height: 200,
    display:'flex',
    flexDirection:'column',
  },
  tabContainer:{
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    width:250,
    marginLeft:75,
  },
  iconContainer:{
    height:50,
    display: 'flex',
    flexDirection: 'row',
    marginTop:50,
    marginLeft:30,
    width:screenWidth-60,
    justifyContent:'flex-end',
  }
});
