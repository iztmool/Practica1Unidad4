import React from 'react';
import AlumnosProvider from './Context/AlumnosContext';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';


export default function App() {
  return (
    <AlumnosProvider>
      <NavigationContainer>
        <BottomTabNavigator1/>
      </NavigationContainer>
    </AlumnosProvider>
  );
}



