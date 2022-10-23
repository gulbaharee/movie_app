import React from 'react';
import {View} from 'react-native';
import HeaderIcon from '../../atoms/HeaderIcon';
import TabLabel from '../../atoms/TabLabel';
import styles from './HomeHeader.style';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <HeaderIcon iconName="screen-share"/>
        <HeaderIcon iconName="search"/>
      </View>
      <View style={styles.tabContainer}>
        <TabLabel placeholder="Diziler" />
        <TabLabel placeholder="Filmler" />
        <TabLabel placeholder="Kategoriler" />
      </View>
    </View>
  );
};
export default HomeHeader;
