import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Modal, Portal, PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';
import { Checklist } from "./Checklist";
import { HeaderText } from './HeaderText';

export const FilterModal = ({ categories, selectedCategories, showFilter }) => {
  return (
    <Portal>
      <Modal visible={showFilter} contentContainerStyle={styles.modal}>
        <HeaderText size={5} color={colors.purpleTwo}>Categories</HeaderText>
        <Checklist list={categories} alreadyCheckedItems={selectedCategories}/>
        <HeaderText size={5} color={colors.purpleTwo}>Price range</HeaderText>
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
    justifyContent: "flex-start"
  }
})

export default FilterModal
