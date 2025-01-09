import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, List, Modal, Portal, PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../utils/colors";
import { sizes } from "../utils/sizes";
import { Checklist } from "./Checklist";
import { HeaderText } from "./HeaderText";
import { NumberRange } from "./NumberRange";

// NOTE: To make FilterModal not flicker, modify Paper's Modal component with code at https://github.com/callstack/react-native-paper/issues/4140 by Qyokizzzz. This is not stored in the repository.

export const FilterModal = ({
  categories,
  selectedCategories,
  priceRange,
  filterTypesOpen,
  setSelectedCategories,
  setPriceRange,
  setFilterTypesOpen,
  showFilter,
  setShowFilter
}) => {

  return (
    <Portal>
      <Modal
        visible={showFilter}
        contentContainerStyle={styles.modal}
        onDismiss={() => setShowFilter(false)}
      >
        <ScrollView>
          <List.Section title={<HeaderText size={5} color={colors.purpleTwo}>Filters</HeaderText>}>
            {/* Start filter by categories section. */}
            <List.Accordion
              style={styles.filterTypeButton}
              expanded={filterTypesOpen["categories"]}
              title={<HeaderText
                size={6}
                color={colors.purpleTwo}>
                  Categories
                </HeaderText>
              }
              onPress={() => setFilterTypesOpen("categories")}
            >
              <Checklist
                list={categories}
                checkedItems={selectedCategories}
                setCheckedItems={setSelectedCategories}
              />
            </List.Accordion>
            {/* End filter by categories section. */}
            {/* Start filter by price range section. */}
            <List.Accordion
              style={styles.filterTypeButton}
              expanded={filterTypesOpen["price"]}
              title={<HeaderText
                size={6}
                color={colors.purpleTwo}>
                  Price range
                </HeaderText>
              }
              onPress={() => setFilterTypesOpen("price")}
            >
              <NumberRange
                leftIcon="currency-usd"
                numberRange={priceRange}
                setNumberRange={setPriceRange}
                lowerLimit="0"
              />
            </List.Accordion>
            {/* End filter by price range section. */}
          </List.Section>
        </ScrollView>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  modal: {
    height: sizes.hge,
    padding: sizes.smb,
    backgroundColor: colors.white,
    marginHorizontal: sizes.mda,
    borderRadius: sizes.mdb,
    justifyContent: "flex-start",
    overflow: "scroll"
  },
  filterTypeButton: {
    backgroundColor: colors.purpleThree,
    marginBottom: 5
  }
})

export default FilterModal
