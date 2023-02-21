import { filterReducer } from '../store/reducers/filterReducer';
import { todosReducer } from '../store/reducers/todosReducer';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
        todosState: todosReducer,
        filterState: filterReducer
  },
});
