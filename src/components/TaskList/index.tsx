import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from '../TaskItem';
import { Todo } from '../../types/Todo';

interface TaskListProps {
  tasks: Todo[];
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TaskItem task={item} onDeleteTask={onDeleteTask} onToggleComplete={onToggleComplete} />
      )}
    />
  );
};

export default TaskList;
