import { useState } from 'react';
import { Todo } from '../types/Todo';

export const useTaskFiltering = (tasks: Todo[]) => {
  const [filterOption, setFilterOption] = useState<string>('all');

  const filteredTasks = tasks.filter((task) => {
    if (filterOption === 'completed') {
      return task.completed;
    } else if (filterOption === 'pending') {
      return !task.completed;
    }
    return true; // Default to showing all tasks
  });

  return { filteredTasks, filterOption, setFilterOption };
};
