import { useState } from 'react';
import { Todo } from '../types/Todo';

export const useTaskSorting = (tasks: Todo[]) => {
  const [sortOption, setSortOption] = useState<string>('dueDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc'); // Sorting direction state

  const sortedTasks = [...tasks].sort((a, b) => {
    const direction = sortDirection === 'asc' ? 1 : -1;

    if (sortOption === 'dueDate') {
      return (new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()) * direction;
    } else if (sortOption === 'status') {
      return (Number(b.completed) - Number(a.completed)) * direction; // Completed tasks first
    } else if (sortOption === 'description') {
      return a.description.localeCompare(b.description) * direction; // Alphabetical sort
    }
    return 0;
  });

  return { sortedTasks, sortOption, setSortOption, sortDirection, setSortDirection };
};
