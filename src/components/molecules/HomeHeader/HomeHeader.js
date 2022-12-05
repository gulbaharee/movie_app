import React from 'react';
import {View} from 'react-native';
import TabLabel from '../../atoms/TabLabel';
import Header from '../Header/Header';
import styles from './HomeHeader.style';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.tabContainer}>
        <TabLabel placeholder="Diziler" />
        <TabLabel placeholder="Filmler" />
        <TabLabel placeholder="Kategoriler" dropDown={true}/>
      </View>
    </View>
  );
};
export default HomeHeader;
