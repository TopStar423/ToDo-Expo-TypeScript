import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface SortControlProps {
  sortOption: string;
  setSortOption: (value: 'description' | 'dueDate') => void;
  sortDirection: 'asc' | 'desc';
  setSortDirection: (value: 'asc' | 'desc') => void;
}

const SortControl: React.FC<SortControlProps> = ({ sortOption, setSortOption, sortDirection, setSortDirection }) => {
  const [openSort, setOpenSort] = useState(false);
  const [openDirection, setOpenDirection] = useState(false);

  const sortOptions = [
    { label: 'Description', value: 'description' },
    { label: 'Due Date', value: 'dueDate' },
  ];

  const sortDirectionOptions = [
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
  ];

  return (
    <View>
      {/* Sort By Dropdown */}
      <View
        style={[
          styles.container,
          openSort ? { zIndex: 1000, elevation: 1000 } : { zIndex: 1, elevation: 1 },
        ]}
      >
        <Text style={styles.label}>Sort By:</Text>
        <DropDownPicker
          open={openSort}
          value={sortOption}
          items={sortOptions}
          setOpen={setOpenSort}
          setValue={setSortOption as (callback: any) => void}
          style={styles.dropdown}
          dropDownDirection="BOTTOM" // Force it to open downwards (bottom)
          placeholder="Select sorting option"
          containerStyle={styles.dropdownContainer}
        />
      </View>

      {/* Sort Direction Dropdown */}
      <View
        style={[
          styles.container,
          openDirection ? { zIndex: 999, elevation: 999 } : { zIndex: 1, elevation: 1 },
        ]}
      >
        <Text style={styles.label}>Sort Direction:</Text>
        <DropDownPicker
          open={openDirection}
          value={sortDirection}
          items={sortDirectionOptions}
          setOpen={setOpenDirection}
          setValue={setSortDirection as (callback: any) => void}
          style={styles.dropdown}
          dropDownDirection="BOTTOM"
          placeholder="Select direction"
          containerStyle={[styles.dropdownContainer, { height: 200 }]} // Increase height to prevent cutoff
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 10,
  },
});

export default SortControl;
