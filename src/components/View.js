import React from 'react';
import { View } from 'react-native';

const CustomView = (props) => {
  const {
    row, jc, ai, flex, style, children,
  } = props;
  const styles = {
    flexDirection: row ? 'row' : 'column',
    justifyContent: jc || 'flex-start',
    alignItems: ai || 'stretch',
    ...(flex && { flex: 1 }),
  };
  return (
    <View {...props} style={[styles, style]}>
      {children}
    </View>
  );
};

export default CustomView;
