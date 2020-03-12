import { StyleSheet } from 'react-native';
import { vw, colors } from '../../theme';

export default StyleSheet.create({
  container: { padding: 5 * vw },
  poster: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
  },
  details: { marginLeft: 10 },
  title: { marginBottom: 10 },
  ratingContainer: { marginBottom: 10 },
  imdb: { marginRight: 10 },
  star: { marginHorizontal: 10 },
  user: { marginHorizontal: 100 },
  controlsContainer: {
    marginTop: 10,
  },
  controls: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: colors.accent,
    borderWidth: 2,
    borderRadius: 10 * vw,
    marginHorizontal: 3 * vw,
    paddingVertical: 5,
  },
});
