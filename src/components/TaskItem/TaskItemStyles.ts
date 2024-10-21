import { StyleSheet } from 'react-native';

export const taskItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  checkboxGroup: {
    flexDirection: 'row', // Place checkbox and text in a row
    alignItems: 'center', // Align items vertically
  },
  text: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  dueDate: {
    fontSize: 12,
    color: 'gray',
  },
  delete: {
    color: 'red',
  },
  checkboxWrapper: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 2,
    borderRadius: 4,
    marginRight: 10, // Fixed space between checkbox and text
  },
});
