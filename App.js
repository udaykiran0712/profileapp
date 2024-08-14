// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PersonalScreen from './screens/PersonalScreen';
// import ProfessionalScreen from './screens/ProfessionalScreen';
// import CompanyScreen from './screens/CompanyScreen';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Personal" component={PersonalScreen} />
//         <Tab.Screen name="Professional" component={ProfessionalScreen} />
//         <Tab.Screen name="Company" component={CompanyScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



function App(){

  return (
    <SafeAreaView >
      <Text>hello</Text>
    </SafeAreaView>
  );
}


export default App;
