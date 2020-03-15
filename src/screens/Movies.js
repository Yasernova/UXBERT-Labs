import React from 'react';
import {
  StatusBar, SafeAreaView, TouchableOpacity, TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialIcons, MaterialCommunityIcons } from 'expo-vector-icons';
import { View, Text } from '../components';
import styles from './styles/Movies.styles';
import { colors, vh } from '../theme';
import MovieCard from '../components/MovieCard';
import Indicator from '../components/Indicator';

const types = {
  setValue: 'SET_VALUE',
  setMovie: 'SET_MOVIE',
  setLoading: 'SET_LOADING',
  setError: 'SET_ERROR',
};

const initialState = {
  value: '',
  movie: null,
  error: '',
  loading: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.setValue:
      return { ...state, value: payload };
    case types.setMovie:
      return { ...state, movie: payload };
    case types.setLoading:
      return { ...state, loading: payload };
    case types.setError:
      return { ...state, error: payload };
    default: return state;
  }
};

const search = (state, dispatch) => {
  if (state.value && state.value.trim()) {
    dispatch({ type: types.setMovie, payload: null });
    dispatch({ type: types.setLoading, payload: true });
    fetch(`http://www.omdbapi.com/?t=${state.value}&apikey=7ddbd2cb`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('something went weing');
      })
      .then(data => (data.imdbID
        ? dispatch({ type: types.setMovie, payload: data })
        : Promise.reject('Movie not found')))
      .catch(() => dispatch({ type: types.setError, payload: 'something went wrong' }))
      .finally(() => dispatch({ type: types.setLoading, payload: false }));
  }
};

const clear = (dispatch) => {
  dispatch({ type: types.setValue, payload: '' });
  dispatch({ type: types.setMovie, payload: null });
  dispatch({ type: types.setError, payload: '' });
};

const Movies = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text center secondary clr={colors.accent} fs={30}>SEARCH</Text>
      <KeyboardAwareScrollView extraHeight={5 * vh} contentContainerStyle={styles.contentContainerStyle}>
        <View flex jc={state.movie ? 'flex-start' : 'center'} ai="center">
          <View row ai="center" style={styles.inputContainer}>
            <TextInput
              value={state.value}
              returnKeyType="search"
              onSubmitEditing={() => search(state, dispatch)}
              onChangeText={text => dispatch({ type: types.setValue, payload: text })}
              style={styles.input}
              placeholder="Search by title, e.g (joker)"
            />
            <TouchableOpacity onPress={() => clear(dispatch)}>
              <MaterialIcons name={state.value.trim() ? 'close' : 'search'} color={colors.accent} size={24} />
            </TouchableOpacity>
          </View>
          {state.loading ? <Indicator /> : null}
          {state.error && !state.movie ? (
            <Text>
              {state.error}
              {' '}
              <MaterialCommunityIcons name="heart-broken" size={18} />
            </Text>
          ) : null}
          {state.movie ? <MovieCard movie={state.movie} /> : null}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Movies;
