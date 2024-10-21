import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formStyles } from './TaskFormStyles';
import { Keyboard } from 'react-native';

interface TaskFormProps {
  onAddTask: (description: string, dueDate: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [dueDateError, setDueDateError] = useState<boolean>(false);

  // Helper function to format date to YYYY-MM-DD
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Handle date selection from DateTimePicker
  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false); // Hide the picker after selection
    if (selectedDate) {
      const formattedDate = formatDate(selectedDate); // Format the date properly
      setDueDate(formattedDate);
    }
  };

  // Show the DateTimePicker when the field is tapped
  const showDatePickerHandler = () => {
    setShowDatePicker(true);
    Keyboard.dismiss(); // Dismiss the keyboard to focus on DateTimePicker
  };

  const handleSubmit = () => {
    // Reset errors
    setDescriptionError(!description.trim());
    setDueDateError(!dueDate);

    if (description.trim() && dueDate) {
      onAddTask(description, dueDate);
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <View style={formStyles.container}>
      {/* Task Description Field */}
      <TextInput
        style={[formStyles.input, descriptionError && formStyles.errorInput]}
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
      />
      {descriptionError && <Text style={formStyles.errorText}>Task description is required</Text>}

      {/* Due Date Field (Tapping shows date picker) */}
      <TouchableOpacity onPress={showDatePickerHandler}>
        <View pointerEvents="none">
          <TextInput
            style={[formStyles.input, dueDateError && formStyles.errorInput]}
            placeholder="Due Date"
            value={dueDate}
            editable={false} // Disable text input manually
          />
        </View>
      </TouchableOpacity>
      {dueDateError && <Text style={formStyles.errorText}>Due date is required</Text>}

      {/* DateTimePicker for Android (modal) and iOS */}
      {showDatePicker && (
        <DateTimePicker
          value={dueDate ? new Date(dueDate) : new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'} // Inline on iOS, default (modal) on Android
          onChange={handleDateChange}
        />
      )}

      {/* Add Task Button */}
      <Button title="Add Task" onPress={handleSubmit} />
    </View>
  );
};

export default TaskForm;
