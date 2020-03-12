import React from 'react';
import { MaterialIcons } from 'expo-vector-icons';
import { colors } from '../theme';
import View from './View';

export default ({ focused, ico }) => (
  <View>
    <MaterialIcons
      name={ico}
      size={22}
      color={focused ? colors.accent : colors.gray3}
    />
  </View>
);
