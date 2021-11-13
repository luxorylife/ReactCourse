import { ADD_TASK, REMOVE_TASK, REMOVE_ALL, CHANGE_TASK } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log('add to state = ', state);
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case REMOVE_TASK:
      console.log('remove from state = ', state);
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case REMOVE_ALL:
      console.log('remove all tasks from state = ', state);
      return {
        ...state,
        tasks: [],
      };

    case CHANGE_TASK:
      console.log('change task from state = ', state);
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              isDone: !task.isDone,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

// action:
// {
//   type: 'ADD_TASK',
//   payload: ??? - полезная нагрузка
// }
