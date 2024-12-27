// In App.js in a new project

import * as React from "react";
import {useEffect, useState} from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "./screens/SearchScreen";
import { colors } from "./utils/colors";
import { sizes } from "./utils/sizes";
import { PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { RootStack } from "./components/RootStack";

export default function App() {
  const [categories, setCategories] = useState({
    "beauty": "Beauty", "technology": "Technology", "groceries": "Groceries", "clothing": "Clothing"
  });
  const [selectedCategories, setSelectedCategories] = useState(["beauty", "groceries"]);

  return (
    <NavigationContainer>
      <RootStack categories={categories} selectedCategories={selectedCategories} />
    </NavigationContainer>
  );
}