import * as React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import About from '../screens/about';

const Stack = createStackNavigator();

function AboutStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#34495E' },
        }}
      >
        <Stack.Screen  options={{ headerShown: false }} name="About"  component={About} />
      </Stack.Navigator>

  );
}

export default AboutStack;
