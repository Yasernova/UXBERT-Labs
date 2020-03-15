import { StyleSheet } from 'react-native';
import { vw, colors } from '../../theme';

export default StyleSheet.create({
  container: { padding: 5 * vw },
  poster: {
    width: 40 * vw,
    height: 55 * vw,
    resizeMode: 'cover',
  },
  details: { marginLeft: 10 },
  title: { marginBottom: 7 },
  imdb: { marginRight: 10 },
  star: { marginHorizontal: 3 },
  heart: { flex: 1 },
  controlsContainer: {
    marginTop: 10,
  },
  controls: {
    flex: 2,
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
