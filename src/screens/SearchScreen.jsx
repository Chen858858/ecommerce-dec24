import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Button, Icon, IconButton, Provider, Searchbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utils/colors";
import { sizes } from "../utils/sizes";
import { FilterModal } from "../components/FilterModal";
import { SearchItem } from "../components/SearchItem";

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
      <ScrollView style={styles.searchItemsContainerOutside} contentContainerStyle={styles.searchItemsContainerInside}>
        {filteredItems.map((item, index) => {
          return <View key={index} style={{marginBottom: 10}}> 
            <SearchItem item={item} />
          </View>;
        })}
      </ScrollView>
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
};

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
  },
  searchItemsContainerInside: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  searchItemsContainerOutside: {
    marginTop: sizes.smc
  }
});

export default SearchScreen;
