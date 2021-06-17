import { ISingleTodos} from '../../entities/todos'
export const GET_TODOS = 'GET_TODOS';

export interface ITodosTypes{
    GET_TODOS:{
        todosList:ISingleTodos[];
    }
}