import React, {useState, useEffect} from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForecastScreen } from './screens/ForecastScreen';
import { HomeScreen } from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import { RootStackParamList } from './types';

import useCachedResources from './hooks/useCachedResources';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
           <Stack.Navigator
             screenOptions={{
              headerShown: false
            }}
           >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Forecast" component={ForecastScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
    </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
