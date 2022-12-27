import React from 'react';
import {View, ScrollView} from 'react-native';
import HomeHeader from '../../components/molecules/HomeHeader/HomeHeader';
import styles from './Home.style';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HomeHeader />
      </View>
    </ScrollView>
  );
};

export default Home;
