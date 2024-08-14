import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import FeedDetail from './screens/FeedDetail';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={App} options={{ headerShown: false }} />
      <Stack.Screen name="FeedDetail" component={FeedDetail} />
    </Stack.Navigator>
  );
}
