import React from "react";
import { View,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


const HeaderIcon=({iconName})=>{
    return(
        <View style={styles.container}>
            <Icon style={styles.default} name={iconName} size={25} />
        </View>
    )
}

export default HeaderIcon;

const styles = StyleSheet.create({
    container:{
        height:35,
        width:35,

    },
    default:{
        color:'white',
    }
})