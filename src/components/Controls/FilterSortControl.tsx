import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import FilterControl from './FilterControl';
import SortControl from './SortControl';

interface FilterSortControlProps {
  filterOption: string;
  setFilterOption: (value: 'all' | 'completed' | 'pending') => void;
  sortOption: string;
  setSortOption: (value: 'description' | 'dueDate') => void;
  sortDirection: 'asc' | 'desc';
  setSortDirection: (value: 'asc' | 'desc') => void;
}

const FilterSortControl: React.FC<FilterSortControlProps> = ({
  filterOption,
  setFilterOption,
  sortOption,
  setSortOption,
  sortDirection,
  setSortDirection,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <View>
      {/* TouchableOpacity for opening modal */}
      <TouchableOpacity style={styles.openButton} onPress={() => setOpenModal(true)}>
        <Text style={styles.buttonText}>Open Filter & Sort Controls</Text>
      </TouchableOpacity>

      {/* Modal for filter and sort controls */}
      <Modal
        isVisible={openModal}
        onBackdropPress={() => setOpenModal(false)}
        style={styles.modal}
        swipeDirection="down"
        onSwipeComplete={() => setOpenModal(false)}
      >
        <View style={styles.modalContent}>
          <FilterControl filterOption={filterOption} setFilterOption={setFilterOption} />

          {/* Adjust zIndex for Sort Control to ensure proper stacking */}
          <SortControl
            sortOption={sortOption}
            setSortOption={setSortOption}
            sortDirection={sortDirection}
            setSortDirection={setSortDirection}
          />

          {/* TouchableOpacity for the Close button */}
          <TouchableOpacity style={[styles.closeButton, { zIndex: 0 }]} onPress={() => setOpenModal(false)}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0, // Full width modal
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: '50%', // Ensure enough space for dropdowns
  },
  openButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FilterSortControl;
