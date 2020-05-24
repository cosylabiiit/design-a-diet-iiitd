import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import CartScreen from '../screens/CartScreen';
import RecipeScreen from '../screens/RecipeScreen';
import HeaderImageLogo from '../components/HeaderLogo.js';
import StackNavigator from './StackNavigator';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({headerTitle: getHeaderTitle(route), headerRight: ()=> <HeaderImageLogo/>, headerShown: showHeader(route)});
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={StackNavigator}
        options={{
          title: 'Search',
          
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />
        }}
      />
      <BottomTab.Screen
        name="Diet"
        component={RecipeScreen}
        options={{
          title: 'Diets',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-cart" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Search':
      return 'Search for your items';
    case 'Diet':
      return 'Plan your Diet'
    case 'Cart':
      return 'Your cart'
  }
}


function showHeader(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return true
    case 'Search':
      return false
    case 'Diet':
      return true
    case 'Cart':
      return true
  }
}
