import React from 'react';
import {Text, StyleSheet, View,Dimensions} from 'react-native';

const width=Dimensions.get('screen').width;

export default TabLabel = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{placeholder}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
  },
  text:{
    fontSize:17,
  }
});
