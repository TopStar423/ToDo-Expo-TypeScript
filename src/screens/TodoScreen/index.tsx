import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import FilterSortControl from '../../components/Controls/FilterSortControl';
import { useTaskSorting } from '../../hooks/useTaskSorting';
import { useTaskFiltering } from '../../hooks/useTaskFiltering';
import { Todo } from '../../types/Todo';
import { todoScreenStyles } from './TodoScreenStyles'; // Import the styles

const TodoScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const { sortedTasks, sortOption, setSortOption, sortDirection, setSortDirection } = useTaskSorting(tasks);
  const { filteredTasks, filterOption, setFilterOption } = useTaskFiltering(sortedTasks);

  const addTask = (description: string, dueDate: string) => {
    const newTask: Todo = {
      id: Date.now(),
      description,
      dueDate,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={todoScreenStyles.container}>
      <Text style={todoScreenStyles.title}>Todo List</Text>
      <TaskForm onAddTask={addTask} />

      <FilterSortControl
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        sortOption={sortOption}
        setSortOption={setSortOption}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
      />

      <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} onToggleComplete={toggleComplete} />
    </View>
  );
};

export default TodoScreen;
