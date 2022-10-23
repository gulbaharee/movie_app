import React from 'react';
import {View, Image} from 'react-native';
import styles from './Header.style';
import HeaderIcon from '../../atoms/HeaderIcon';

const Header = () => {
  return (
    <View style={styles.iconContainer}>
      <Image style={styles.netflix} source={require('../../../assets/icons/netflix.webp')} />
      <HeaderIcon iconName="screen-share" />
      <HeaderIcon iconName="search" />
    </View>
  );
};

export default Header;
