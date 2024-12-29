import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, List, Modal, Portal, PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';
import { Checklist } from "./Checklist";
import { HeaderText } from './HeaderText';

export const FilterModal = ({
  categories,
  selectedCategories,
  filterTypesOpen,
  setSelectedCategories,
  setFilterTypesOpen,
  showFilter }) => {
  
  return (
    <Portal>
      <Modal visible={showFilter} contentContainerStyle={styles.modal}>
        <ScrollView>
          <List.Section title={<HeaderText size={5} color={colors.purpleTwo}>Filters</HeaderText>}>
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
                alreadyCheckedItems={selectedCategories}
                setAlreadyCheckedItems={setSelectedCategories}
              />
            </List.Accordion>
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
    backgroundColor: colors.purpleThree
  }
})

export default FilterModal
