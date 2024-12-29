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
  // This state stores the categories.
  const [categories, setCategories] = useState({});
  // This state stores the categories that were selected in the filter.
  const [selectedCategories, setSelectedCategories] = useState(["beauty", "groceries", "kitchen-accessories", "mens-shoes"]);
  // This state stores all the items.
  const [items, setItems] = useState([]);
  // This state stores the filter types open in the filter.
  const [filterTypesOpen, setFilterTypesOpen] = useState({
    "categories": true
  });

  const processSetSelectedCategories = (newSelectedCategories) => {
    setSelectedCategories(newSelectedCategories);
  };

  // This function takes in a filter type and sets its open status in the filterTypesOpen.
  const processFilterTypesOpen = (filterType) => {
    let newFilterTypeOpen = {...filterTypesOpen};
    newFilterTypeOpen[filterType] = !filterTypesOpen[filterType];
    setFilterTypesOpen(newFilterTypeOpen);
  };

  // This effect calls the API to get the categories.
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
        filterTypesOpen={filterTypesOpen}
        setSelectedCategories={processSetSelectedCategories}
        setFilterTypesOpen={processFilterTypesOpen}
      />
    </NavigationContainer>
  );
}