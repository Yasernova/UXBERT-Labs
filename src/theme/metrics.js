import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default {
  vh: screenHeight / 100,
  vw: screenWidth / 100,
};
