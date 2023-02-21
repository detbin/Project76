import {addTodo,toggleTodo} from '../actions/actions'
//Initial TodosState empty
let initialState=[];

export const todosReducer = (state=initialState,action)=>{
    
    switch(action){
        case addTodo:
            return [
                ...state,
                {
                    id:action.payload.id,
                    text:action.payload.text,
                    completed:false
                }
            ]
        case toggleTodo:
            return state.map((todo)=>
            (todo.id===action.payload.id)
            ?
            {
                ...todo,
                completed : !todo.completed
            }
            :
            todo
            )
        default:
            return state;
        }
    }

