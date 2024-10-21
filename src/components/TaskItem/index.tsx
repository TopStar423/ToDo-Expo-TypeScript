import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { taskItemStyles } from './TaskItemStyles';
import { Todo } from '../../types/Todo';

interface TaskItemProps {
  task: Todo;
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDeleteTask, onToggleComplete }) => {
  return (
    <View style={taskItemStyles.container}>
      <View style={taskItemStyles.checkboxGroup}>
        {/* Wrap checkbox and text in a row with fixed spacing */}
        <View style={taskItemStyles.checkboxWrapper}>
          <Checkbox
            status={task.completed ? 'checked' : 'unchecked'}
            onPress={() => onToggleComplete(task.id)}
          />
        </View>
        <View>
          <Text style={[taskItemStyles.text, task.completed && taskItemStyles.completed]}>
            {task.description}
          </Text>
          <Text style={taskItemStyles.dueDate}>Due: {task.dueDate}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
        <Text style={taskItemStyles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
