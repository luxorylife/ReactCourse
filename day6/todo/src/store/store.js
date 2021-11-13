import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const initialStore = {
  tasks: [],
};

export const store = createStore(reducer, initialStore, composeWithDevTools());
