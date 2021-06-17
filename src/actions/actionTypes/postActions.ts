import {Dispatch} from 'redux';
import * as actionTypes from '../actionTypes/postTypes';
import { ISinglePost } from '../../entities/posts';

export const getPosts = (): Promise<ISinglePost[]> =>  ( (dispath: Dispatch) => {
   return fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((postsList: ISinglePost[])=>{
     dispath({
     type: actionTypes.GET_POSTS,
     postsList
   })
  })
}) as any;