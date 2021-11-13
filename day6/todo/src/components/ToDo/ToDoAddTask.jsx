import React, { useState } from 'react';
import shortid from 'shortid';

const ToDoAddTask = () => {
  const [inputText, setInputText] = useState('');

  console.log(inputText);

  const btnAddTaskHandler = () => {
    // console.log(btnAddTaskHandler);

    // собрать задачу

    const task = {
      id: shortid.generate(),
      title: inputText,
    };

    console.log(task);

    // отправить в redux
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />
      <button onClick={btnAddTaskHandler}>Добавить задачу</button>
    </div>
  );
};

export default ToDoAddTask;
