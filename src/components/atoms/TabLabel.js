import React from 'react';
import {Text, StyleSheet, View, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const width = Dimensions.get('screen').width;

export default TabLabel = ({placeholder, onPress, dropDown}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{placeholder}</Text>
        {dropDown ? <Icon style={styles.icon} name="caretdown" size={15} /> : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 17,
    color: 'white',
    
  },
  icon: {
    color: 'white',
    padding:3,
  },
});
