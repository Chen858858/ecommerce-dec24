import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon, IconButton, Provider, Searchbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utils/colors";
import { sizes } from "../utils/sizes";
import { FilterModal } from "../components/FilterModal";

export const SearchScreen = ({
  filteredItems,
  searchPage,
  categories,
  searchTerm,
  selectedCategories,
  priceRange,
  filterItems,
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
      <Button
        mode="contained"
        buttonColor={colors.purpleOne}
        onPress={() => filterItems()}
      >
        <View style={styles.searchButtonInside}>
          <Icon source="magnify" size={sizes.mdb} color={colors.white} />
          <Text style={styles.searchButtonText}>Search</Text>
        </View>
      </Button>
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
  searchButtonInside: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  searchButtonText: {
    fontFamily: "Gabarito",
    fontSize: sizes.mdb,
    color: colors.white
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 5
  }
});

export default SearchScreen;
