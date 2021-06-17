import { ISingleTodos} from '../entities/todos';
import  * as actionTypes from '../actions/actionTypes/todoTypes';

export interface ITodosReducers {
    todosList: ISingleTodos[];
}

const defaultState = (): ITodosReducers => ({
    todosList: []
});

const reducer= (state=defaultState(), action: any ) =>{
    switch(action.type){
        case actionTypes.GET_TODOS: {
            const data: actionTypes.ITodosTypes['GET_TODOS'] = action;
            
            return{
                ...state,
                todosList:data.todosList
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;