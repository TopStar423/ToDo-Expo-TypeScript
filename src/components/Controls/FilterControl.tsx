import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface FilterControlProps {
  filterOption: string;
  setFilterOption: (value: 'all' | 'completed' | 'pending') => void;
}

const FilterControl: React.FC<FilterControlProps> = ({ filterOption, setFilterOption }) => {
  const [openFilter, setOpenFilter] = useState(false);

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Pending', value: 'pending' },
  ];

  return (
    <View
      style={[
        styles.container,
        openFilter ? { zIndex: 1000, elevation: 1000 } : { zIndex: 1, elevation: 1 },
      ]}
    >
      <Text style={styles.label}>Filter Tasks:</Text>
      <DropDownPicker
        open={openFilter}
        value={filterOption}
        items={filterOptions}
        setOpen={setOpenFilter}
        setValue={setFilterOption as (callback: any) => void}
        style={styles.dropdown}
        dropDownDirection="BOTTOM" // Force it to open downwards
        placeholder="Select filter option"
        containerStyle={styles.dropdownContainer}
      />
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

export default FilterControl;
