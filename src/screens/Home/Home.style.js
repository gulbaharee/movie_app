import { StyleSheet,Dimensions } from "react-native";

const screenHeight = Dimensions.get('screen').height;

export default StyleSheet.create({
    container:{
        backgroundColor:'black',
        height:screenHeight,
    }
})
