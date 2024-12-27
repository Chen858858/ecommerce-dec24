// In App.js in a new project

import * as React from 'react';
import {useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen } from "./screens/SearchScreen.jsx";
import { colors } from "./utils/colors.js";
import { sizes } from "./utils/sizes.js";
import { PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function RootStack() {
  // START: This code is for loading the font(s).
  const [loaded, error] = useFonts({
    'Inter-Black': require('./fonts/Gabarito-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  // END: This code is for loading the font(s).

  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.purple
        },
        headerTintColor: colors.white,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Gabarito",
          fontSize: sizes.mdd,
          fontWeight: "bold"
        }
      }}
    >
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Item search"
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}