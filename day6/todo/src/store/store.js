import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const initialStore = {
  tasks: [1, 2, 3],
  user: 'Oleg',
};

export const store = createStore(reducer, initialStore, composeWithDevTools());
