import React from 'react';
import { Text } from 'react-native';
import { colors } from '../theme';

class ThemeText extends React.Component {
  state = {};

  render() {
    const {
      style, center, bold, fs, clr, secondary,
    } = this.props;
    const defaultStyle = {
      textAlign: center ? 'center' : 'left',
      fontFamily: secondary ? 'secondary' : 'primary',
      fontWeight: bold ? 'bold' : 'normal',
      fontSize: Number(fs) || 16,
      color: clr || colors.gray2,
    };
    return (
      <Text {...this.props} allowFontScaling style={[defaultStyle, style]} />
    );
  }
}

export default ThemeText;
