// In App.js in a new project

import * as React from "react";
import { useEffect, useState } from "react";
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
  const [categories, setCategories] = useState({});
  const [selectedCategories, setSelectedCategories] = useState(["beauty", "groceries", "kitchen-accessories", "mens-shoes"]);
  const [items, setItems] = useState([]);

  const processSetSelectedCategories = (newSelectedCategories) => {
    setSelectedCategories(newSelectedCategories);
  };

  useEffect(() => {
    const fetchCategories = async() => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      let processedCategories = {};
      data.forEach(categoryInfo => {
        processedCategories[categoryInfo.slug] = categoryInfo.name;
      });
      setCategories(processedCategories);
    };
    fetchCategories();
  }, []);

  return (
    <NavigationContainer>
      <RootStack
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={processSetSelectedCategories}
      />
    </NavigationContainer>
  );
}