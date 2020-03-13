import { StyleSheet } from 'react-native';
import { colors, vw, vh } from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    paddingTop: 5 * vh,
  },
  contentContainerStyle: { flex: 1 },
  inputContainer: {
    backgroundColor: colors.gray1,
    borderRadius: 10 * vw,
    padding: 4 * vw,
    marginHorizontal: 5 * vw,
    marginVertical: 5 * vh,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
});
