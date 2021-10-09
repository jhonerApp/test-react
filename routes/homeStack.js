import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

import { View, Text } from 'react-native';

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  return (
    // <Home/>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="ReviewDetails"
        options={{ headerShown: false }}
        component={ReviewDetails}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
