import react from 'react';
import {View, Pressable,Text} from 'react-native';
import HeaderIcon from '../../atoms/HeaderIcon';
import styles from './PlayButton.style';

const PlayButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <HeaderIcon style={styles.icon} iconName="play-arrow" color="black"/>
        <Text style={styles.text}>Oynat</Text>
      </View>
    </Pressable>
  );
};

export default PlayButton;
