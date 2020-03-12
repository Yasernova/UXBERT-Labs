import React from 'react';
import { SafeAreaView } from 'react-native';
import MovieCard from '../components/MovieCard';
import styles from './styles/Favorites.styles';

const Favorites = () => (
  <SafeAreaView style={styles.container}>
    <MovieCard />
  </SafeAreaView>
);

export default Favorites;
