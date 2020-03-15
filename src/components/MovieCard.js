import React, { memo } from 'react';
import { Image, TouchableOpacity, Share } from 'react-native';
import { AntDesign, FontAwesome } from 'expo-vector-icons';
import Favorites from '../contexts/Favorites';

import { View, Text } from '.';
import { colors } from '../theme';
import styles from './styles/MovieCard.styles';

const share = poster => Share.share({ message: `Checkout this poster! \n ${poster}` });

const MovieCard = (props) => {
  const {
    movie: {
      Poster, Year, Released, imdbID,
      imdbRating, Plot, imdbVotes, Title,
    } = {},
    movie,
  } = props;

  const { favorites = {}, updateFavorites } = React.useContext(Favorites);
  const handleShare = React.useMemo(() => () => share(Poster), []);
  const isFavorite = imdbID in favorites;
  return (
    <View row style={styles.container}>
      <Image
        style={styles.poster}
        source={{ uri: Poster }}
      />
      <View flex style={styles.details}>
        <View style={styles.title}>
          <Text secondary fs={20}>{Title}</Text>
          <Text fs={16}>
            Year:
            {' '}
            {Year}
          </Text>
          <Text fs={16}>
            Released:
            {' '}
            {Released}
          </Text>
        </View>
        <View row ai="center">
          <FontAwesome style={styles.imdb} name="imdb" color="gold" size={26} />
          <Text secondary>{imdbRating}</Text>
          <FontAwesome style={styles.star} name="star" color="gold" size={16} />
          <Text>
            (
            {`${imdbVotes} `}
            <FontAwesome name="user" color={colors.gray1} size={16} />
            )
          </Text>
        </View>
        <View>
          <Text fs={10} numberOfLines={3}>{Plot}</Text>
        </View>
        <View row flex jc="space-evenly" ai="flex-end" style={styles.controlsContainer}>
          <TouchableOpacity style={styles.heart} onPress={() => updateFavorites(movie)}>
            <AntDesign name={isFavorite ? 'heart' : 'hearto'} size={30} color={colors.accent} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare} style={styles.controls}>
            <Text secondary>SHARE</Text>
            <AntDesign name="sharealt" size={18} color={colors.gray1} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
// using memo will prevent unnecessary rerendering when updating the favorites list
export default memo(MovieCard);
