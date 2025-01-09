import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, IconButton, Provider, Searchbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { sizes } from "../utils/sizes";
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
  const [showFilter, setShowFilter] = useState(false);

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
          <IconButton
            mode="contained-tonal"
            icon="tune"
            style={styles.openFilterButton}
            onPress={() => setShowFilter(true)}
          />
        </View>
      </View>
    </View>
    <FilterModal
      showFilter={showFilter}
      setShowFilter={setShowFilter}
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
  openFilterButton: {
    width: sizes.lgf,
    height: sizes.lgf
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default SearchScreen;
