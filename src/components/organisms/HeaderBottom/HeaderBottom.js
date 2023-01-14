import React from 'react';
import {View, Text, Pressable} from 'react-native';
import HeaderIcon from '../../atoms/HeaderIcon';
import PlayButton from '../../molecules/PlayButton/PlayButton';
import styles from './HeaderBottom.style';

const HomeBottom = () => {
  return (
    <View style={{alignItems:'center'}}>
      <View style={styles.iconContainer}>
        <View style={styles.buttons}>
          <Pressable>
            <HeaderIcon iconName="add" color="white"/>
            <Text style={styles.text}>Listem</Text>
          </Pressable>
        </View>
        <View>
          <PlayButton />
        </View>
        <View style={styles.buttons}>
          <Pressable>
            <HeaderIcon iconName="info" color="white"/>
            <Text style={styles.text}>Listem</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeBottom;
