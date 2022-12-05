import React from 'react';
import {Text, StyleSheet, View, Dimensions, Pressable} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const width = Dimensions.get('screen').width;

export default TabLabel = ({placeholder, onPress, dropDown}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{placeholder}</Text>
        {dropDown ? <Icon style={styles.icon} name="down" size={15} /> : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
  },
  icon: {
    color: 'white',
  },
});
