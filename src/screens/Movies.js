import React from 'react';
import { StatusBar, SafeAreaView, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialIcons } from 'expo-vector-icons';
import { View } from '../components';
import styles from './styles/Movies.styles';

const Movies = () => {
  const [value, setValue] = React.useState('');
  // we need this state to till if the search bar is focused or not and toggle it's position
  const [isFocus, setFocus] = React.useState(false);

  // memoizing toggle function so it won't be declared every time the component rerenders
  const toggleFocus = React.useMemo(() => () => setFocus(!isFocus), [isFocus]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View flex jc={isFocus ? 'flex-start' : 'center'} ai="center">
          <View row style={styles.inputContainer}>
            <TextInput
              value={value}
              onFocus={toggleFocus}
              onBlur={toggleFocus}
              onChangeText={setValue}
              style={styles.input}
              placeholder="Search by title, e.g (cast away)"
            />
            <MaterialIcons name="search" size={24} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Movies;
