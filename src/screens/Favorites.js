import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import MovieCard from '../components/MovieCard';
import { Text } from '../components';
import styles from './styles/Favorites.styles';
import Favorites from '../contexts/Favorites';
import { colors } from '../theme';

const FavoritesList = () => {
  const { favorites } = React.useContext(Favorites);
  return (
    <SafeAreaView style={styles.container}>
      <Text center secondary clr={colors.accent} fs={30}>FAVORITES</Text>
      <FlatList extraDate={favorites} data={Object.values(favorites)} keyExtractor={movie => movie.imdbID} renderItem={({ item }) => <MovieCard movie={item} />} />
    </SafeAreaView>
  );
};

export default FavoritesList;
