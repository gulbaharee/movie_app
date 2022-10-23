import React from 'react';
import {View} from 'react-native';
import HomeHeader from '../../components/molecules/HomeHeader/HomeHeader';
import styles from './Home.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  );
};

export default Home;
