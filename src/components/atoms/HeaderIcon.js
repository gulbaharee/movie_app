import React from "react";
import { View,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


const HeaderIcon=({iconName,color})=>{
    return(
        <View style={styles.container}>
            <Icon style={{color:color}} name={iconName} size={25} />
        </View>
    )
}

export default HeaderIcon;

const styles = StyleSheet.create({
    container:{
        height:35,
        width:35,

    },
})