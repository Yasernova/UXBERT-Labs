import React from 'react';
import {
  StatusBar, SafeAreaView, TouchableOpacity, TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialIcons, MaterialCommunityIcons } from 'expo-vector-icons';
import { View, Text } from '../components';
import styles from './styles/Movies.styles';
import { colors } from '../theme';
import MovieCard from '../components/MovieCard';
import Indicator from '../components/Indicator';


const Movies = () => {
  // we need this state to till if the search bar is focused or not and toggle it's position
  const [isFocus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [movie, setMovie] = React.useState(null);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  // memoizing functions so it won't be declared every time the component rerenders
  const search = React.useMemo(() => () => {
    if (value && value.trim()) {
      setLoading(true);
      fetch(`http://www.omdbapi.com/?t=${value}&apikey=7ddbd2cb`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject('something went weing');
        })
        .then(data => (data.imdbID ? setMovie(data) : Promise.reject('Movie not found')))
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [isFocus, value]);
  const toggleFocus = React.useMemo(() => () => setFocus(!isFocus), [isFocus]);
  const clear = React.useMemo(() => () => {
    setValue('');
    setMovie(null);
    setError('');
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text center secondary clr={colors.accent} fs={30}>SEARCH</Text>
      <KeyboardAwareScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View flex jc={isFocus || value ? 'flex-start' : 'center'} ai="center">
          <View row ai="center" style={styles.inputContainer}>
            <TextInput
              value={value}
              onFocus={toggleFocus}
              onBlur={toggleFocus}
              returnKeyType="search"
              onSubmitEditing={() => search()}
              onChangeText={setValue}
              style={styles.input}
              placeholder="Search by title, e.g (joker)"
            />
            <TouchableOpacity onPress={clear}>
              <MaterialIcons name={value.trim() ? 'close' : 'search'} color={colors.accent} size={24} />
            </TouchableOpacity>
          </View>

          {loading ? <Indicator /> : null}

          {error && !movie ? (
            <Text>
              {error}
              {' '}
              <MaterialCommunityIcons name="heart-broken" size={18} />
            </Text>
          ) : null}
          {movie ? <MovieCard movie={movie} /> : null}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Movies;
