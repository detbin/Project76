import { setVisibilityFilter } from '../actions/actions'
let initialState ="SHOW_ALL"

export const filterReducer =(state=initialState, action)=>{
    switch (action){
        case setVisibilityFilter:
            return action.payload.filterReducer
        default:
            return state;    
    }
}