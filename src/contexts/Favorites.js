import React from 'react';
import { AsyncStorage } from 'react-native';

const Favorite = React.createContext({});

export class FavoriteProvider extends React.Component {
  state = { favorites: {} }

  initialGet = () => AsyncStorage.getItem('favorites')
    .then(favorites => favorites && this.setState({ favorites: JSON.parse(favorites) }))
    .catch(console.error);

  componentDidMount = () => {
    this.initialGet();
  };

  updateFavorites = (movie) => {
    const { favorites } = this.state;
    const updatedFavorites = movie.imdbID in favorites
      ? Object.values(favorites)
        .filter(m => m.imdbID !== movie.imdbID)
        .reduce((all, item) => ({ ...all, [item.imdb]: item }), {})
      : {
        ...favorites,
        [movie.imdbID]: movie,
      };
    this.setState({ favorites: updatedFavorites });
    AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  render() {
    const { favorites } = this.state;
    const { children } = this.props;
    return (
      <Favorite.Provider value={{ favorites, updateFavorites: this.updateFavorites }}>
        {children}
      </Favorite.Provider>
    );
  }
}
export default Favorite;
