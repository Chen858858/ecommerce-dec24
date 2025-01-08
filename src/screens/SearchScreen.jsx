import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Provider, Searchbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { sizes } from '../utils/sizes';
import { FilterModal } from "../components/FilterModal";

export const SearchScreen = ({
  categories,
  searchTerm,
  selectedCategories,
  priceRange,
  filterTypesOpen,
  setSearchTerm,
  setSelectedCategories,
  setPriceRange,
  setFilterTypesOpen
}) => {
  return (<Provider>
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={{flex: 0.9}}>
          <Searchbar
            value={searchTerm}
            placeholder="Search for items..."
            style={{height: sizes.xla}}
            inputStyle={{fontFamily: "Gabarito"}}
            onChangeText={valueText => setSearchTerm(valueText)}
          />
        </View>
        <View>
          <Button
            mode="contained-tonal"
            style={{height: sizes.xla, display: 'flex', justifyContent: 'center'}}
          >
            <MaterialCommunityIcons
              name="tune"
              size={sizes.mdc}
            />
          </Button>
        </View>
      </View>
    </View>
    <FilterModal
      // showFilter="true"
      categories={categories}
      selectedCategories={selectedCategories}
      priceRange={priceRange}
      filterTypesOpen={filterTypesOpen}
      setSelectedCategories={setSelectedCategories}
      setPriceRange={setPriceRange}
      setFilterTypesOpen={setFilterTypesOpen}
    />
    </Provider>);
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.smb,
    paddingTop: sizes.mda,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
});

export default SearchScreen;
