// In App.js in a new project

import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventProvider } from "react-native-outside-press";
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
  // This state stores all the items.
  const [items, setItems] = useState([]);
  // This state stores the filtered items.
  const [filteredItems, setFilteredItems] = useState([]);
  // This state stores the page the search is currently on, each page displaying 10 items.
  const [searchPage, setSearchPage] = useState(0);
  // This state stores the search term.
  const [searchTerm, setSearchTerm] = useState("");
  // This state stores the categories that were selected in the filter.
  const [selectedCategories, setSelectedCategories] = useState([]);
  // This state stores the filter price range.
  const [priceRange, setPriceRange] = useState({"minimum": 0.00, "maximum": 1000.00});
  // This state stores the filter types open in the filter.
  const [filterTypesOpen, setFilterTypesOpen] = useState({
    "categories": false,
    "price": true
  });

  // This function filters the items.
  const filterItems = () => {

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

  // This effect calls the API to get the items.
  useEffect(() => {
    const fetchItems = async() => {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      setItems(data["products"]);
    };
    fetchItems();
  }, []);

  // THIS EFFECT IS ONLY FOR DEBUGGING ONLY. It will be deleted at the proper time.
  useEffect(
    () => console.log("In App:", {filterTypesOpen})
  , [filterTypesOpen]);

  // THIS EFFECT IS ONLY FOR DEBUGGING ONLY. It will be deleted at the proper time.
  useEffect(
    () => console.log("In App:", {searchTerm})
  , [searchTerm]);

  // THIS EFFECT IS ONLY FOR DEBUGGING ONLY. It will be deleted at the proper time.
  useEffect(
    () => console.log("In App:", {selectedCategories})
  , [selectedCategories]);

  // THIS EFFECT IS ONLY FOR DEBUGGING ONLY. It will be deleted at the proper time.
  useEffect(
    () => console.log("In App:", {priceRange})
  , [priceRange]);

  return (
    <EventProvider>
      <NavigationContainer>
        <RootStack
          searchTerm={searchTerm}
          categories={categories}
          selectedCategories={selectedCategories}
          priceRange={priceRange}
          filterTypesOpen={filterTypesOpen}
          setSearchTerm={setSearchTerm}
          setSelectedCategories={setSelectedCategories}
          setPriceRange={setPriceRange}
          setFilterTypesOpen={processFilterTypesOpen}
        />
      </NavigationContainer>
    </EventProvider>
  );
}