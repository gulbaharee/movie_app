import React from 'react';
import {StyleSheet, View, Pressable, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';

const HeaderImage = ({img, types}) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
          style={styles.image}
        />
        <View style={styles.labels}>
          {types.map((type, index) => (
            <Text key={type} style={styles.label}>
              {type}
              {index < types.length - 1 && (
                <Icon style={styles.default} name="dot-single" size={17} />
              )}
            </Text>
          ))}
        </View>
      </View>
    </Pressable>
  );
};

export default HeaderImage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 230,
    height: 300,
  },
  labels: {
    display: 'flex',
    flexDirection: 'row',
  },
  label:{
    fontSize:20,
    fontWeight:'500',
    color:'white'
  }
});
