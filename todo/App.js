import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './src/views/Home'
import Task from './src/views/Task'
import QrCode from './src/views/QrCode';

//disabilita os alerts de erros do react-native - recomendado pelo professor
console.disableYellowBox=true;

const Stack = createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator  initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Task' component={Task} options={{ headerShown: false }}  />
      <Stack.Screen name='QrCode' component={QrCode} options={{ headerShown: false }}  />

    </Stack.Navigator>
   </NavigationContainer>
  );
}

