import React from 'react';
import { BarIndicator } from 'react-native-indicators';
import { colors } from '../theme';

const Indicator = () => <BarIndicator color={colors.accent} count={5} />;

export default Indicator;
