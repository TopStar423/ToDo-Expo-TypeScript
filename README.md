# Todo List App with Sorting and Filtering

This project is a simple **React Native** todo list application built using **Expo**. It features task management with options to **add**, **complete**, **delete**, **filter**, and **sort tasks**. The app provides a user-friendly modal interface to manage sorting and filtering options for tasks.

## Features

- **Add tasks** with a description and due date.
- **Mark tasks** as completed.
- **Delete tasks** from the list.
- **Filter tasks** by:
  - All tasks
  - Completed tasks
  - Pending tasks
- **Sort tasks** by:
  - Description
  - Due date
- **Sort in ascending or descending order**.
- Responsive modal for filtering and sorting controls.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Custom Hooks](#custom-hooks)

## Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/your-username/todo-list-react-native.git](https://github.com/TopStar423/ToDo-Expo-TypeScript)

2. Navigate to the project directory:

   ```bash
   cd todo-list-react-native

3. Install the dependencies:

   ```bash
   npm install

4. Start the Expo development server:

    ```bash
    expo start

5. Open the app on your simulator or mobile device by following the instructions provided by Expo.

## Usage
1. Add a Task: Enter a task description and due date in the form, and click "Add Task".
2. Mark as Completed: Check the box next to a task to mark it as completed.
3. Delete a Task: Press the delete button next to a task to remove it.
4. Filter/Sort Tasks: Click the "Open Filter & Sort Controls" button to open the modal and apply sorting or filtering criteria.

## Project Structure
```bash
    src/
    ├── components/
    │   ├── Controls/
    │   │   ├── FilterControl.tsx
    │   │   ├── SortControl.tsx
    │   │   └── FilterSortControl.tsx
    │   ├── TaskForm.tsx
    │   └── TaskList.tsx
    ├── hooks/
    │   ├── useTaskSorting.ts
    │   └── useTaskFiltering.ts
    ├── screens/
    │   ├── TodoScreen.tsx
    │   └── TodoScreenStyles.ts
    └── types/
        └── Todo.ts
```

## Custom Hooks
- useTaskSorting.ts: Manages sorting logic for tasks based on description or due date, and allows sorting in ascending or descending order.
- useTaskFiltering.ts: Handles filtering tasks based on their status (all, completed, or pending).
