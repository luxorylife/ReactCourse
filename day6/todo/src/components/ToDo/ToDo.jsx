import React from 'react';
import ToDoList from './ToDoList';
import ToDoAddTask from './ToDoAddTask';

export const ToDo = () => {
  return (
    <div>
      <h2>Список задач</h2>
      <ToDoAddTask />
      <ToDoList />
    </div>
  );
};
