import {Dispatch} from 'redux';
import * as actionTypes from '../actionTypes/todoTypes';
import { ISingleTodos } from '../../entities/todos';

export const getTodos = (): Promise<ISingleTodos[]> =>  ( (dispath: Dispatch) => {
   return fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then((todosList: ISingleTodos[])=>{
     dispath({
     type: actionTypes.GET_TODOS,
     todosList
   })
  })
}) as any;