import { StyleSheet } from 'react-native';
import { colors, vw, vh } from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  inputContainer: {
    backgroundColor: colors.gray,
    borderRadius: 10 * vw,
    padding: 4 * vw,
    marginHorizontal: 5 * vw,
    marginVertical: 5 * vh,
  },
  input: {
    flex: 1,
  },
});
