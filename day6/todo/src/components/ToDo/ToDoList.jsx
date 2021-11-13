import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeTaskAction,
  removeAllTasksAction,
  changeTaskAction,
} from '../../store/actions';
import classNames from 'classnames';

const ToDoList = () => {
  const list = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  console.log('list of tasks = ', list);

  const btnRemoveTaskHandler = (id) => {
    console.log('delete id = ' + id);
    dispatch(removeTaskAction(id));
  };

  const btnRemoveAllTasksHandler = () => {
    dispatch(removeAllTasksAction());
  };

  const btnChangeTaskHandler = (id) => {
    dispatch(changeTaskAction(id));
  };

  return (
    <div>
      <ul>
        {list.map((task) => {
          return (
            <li
              key={task.id}
              // className={`task ${task.isDone ? 'complete' : 'incomplete'}`}
              className={classNames(
                'task',
                task.isDone ? 'complete' : 'incomplete'
              )}
            >
              {task.title}

              <button
                onClick={() => {
                  btnChangeTaskHandler(task.id);
                }}
              >
                {task.isDone ? 'Вернуть' : 'Завершить'}
              </button>

              <button
                onClick={() => {
                  btnRemoveTaskHandler(task.id);
                }}
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          btnRemoveAllTasksHandler();
        }}
      >
        Удалить все задачи
      </button>
    </div>
  );
};

export default ToDoList;
