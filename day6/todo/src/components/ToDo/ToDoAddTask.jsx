import React, { useState } from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../../store/actions';

const ToDoAddTask = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  //console.log(inputText);

  const btnAddTaskHandler = () => {
    // console.log(btnAddTaskHandler);

    // собрать задачу
    const task = {
      id: shortid.generate(),
      title: inputText,
      idDone: false,
    };

    console.log(task);

    // отправить в redux
    // dispatch({
    //   type: 'ADD_TASK',
    //   payload: task,
    // });

    // функция из store -> actions.js
    dispatch(addTaskAction(task));

    setInputText('');
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
