import React from 'react';
import ToDoList from './ToDoList';
import ToDoAddTask from './ToDoAddTask';
import './ToDo.css';

export const ToDo = () => {
  return (
    <div className="to-do-wrapper">
      <h2>Список задач</h2>
      <ToDoAddTask />
      <ToDoList />
    </div>
  );
};
