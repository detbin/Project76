import { filterReducer } from './filterReducer';
import { todosReducer } from './todosReducer';
import { combineReducers } from 'redux';
import {ADD_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER} from '../actions/actions'

export const rootReducer = combineReducers({
    reducer:{
        todosState: todosReducer(state,action),
        filterState: filterReducer(state,action),
    }
})