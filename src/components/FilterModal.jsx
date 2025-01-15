import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Icon, List, Modal, Portal, PaperProvider } from "react-native-paper";
import { colors } from "../utils/colors";
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
        <List.Section style={{flex: 0.95}} title={<HeaderText size={5} color={colors.purpleTwo}>Filters</HeaderText>}>
          <ScrollView>
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
                minimumLabel="Min price"
                maximumLabel="Max price"
                numberRange={priceRange}
                setNumberRange={setPriceRange}
                lowerLimit="0"
              />
            </List.Accordion>
            {/* End filter by price range section. */}
          </ScrollView>
        </List.Section>
        <Button
          mode="contained"
          buttonColor={colors.red}
          onPress={() => setShowFilter(false)}
        >
          <View style={styles.closeModalButtonInside}>
            <Icon source="close" size="20" color={colors.white} />
            <Text style={styles.closeModalButtonText}>Close Filters</Text>
          </View>
        </Button>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  closeModalButtonInside: {
    width: 150,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  closeModalButtonText: {
    fontFamily: "Gabarito",
    fontSize: 20,
    color: colors.white
  },
  filterTypeButton: {
    backgroundColor: colors.purpleThree,
    marginBottom: 5
  },
  modal: {
    height: 580,
    padding: 8,
    backgroundColor: colors.white,
    marginHorizontal: 16,
    borderRadius: 20,
    justifyContent: "space-between",
  },
})

export default FilterModal;
