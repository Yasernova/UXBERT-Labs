import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from '../components/TabBarIcon';
import Movies from '../screens/Movies';
import Favorites from '../screens/Favorites';
import Text from '../components/Text';
import { colors } from '../theme';

const TabNavigator = createBottomTabNavigator(
  {
    Movies: {
      screen: Movies,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} ico="local-movies" />,
        tabBarLabel: ({ focused }) => <Text bold clr={focused ? colors.accent : colors.gray4}>MOVIES</Text>,
      }),
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} ico="favorite" />,
        tabBarLabel: ({ focused }) => <Text bold clr={focused ? colors.accent : colors.gray4}>FAVORITES</Text>,
      }),
    },
  },
  {
    tabBarOptions: {
      style: {
        shadowColor: colors.secondary,
        borderTopWidth: 0,
        backgroundColor: colors.primary,
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: -5 },
      },
    },
  },
);

export default TabNavigator;
