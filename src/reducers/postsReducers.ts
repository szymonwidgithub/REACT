import { ISinglePost} from '../entities/posts';
import  * as actionTypes from '../actions/actionTypes/postTypes';

export interface IPostsReducers {
    postsList: ISinglePost[];
}

const defaultState = (): IPostsReducers => ({
    postsList: []
});

const reducer= (state=defaultState(), action: any ) =>{
    switch(action.type){
        case actionTypes.GET_POSTS: {
            const data: actionTypes.IPostsTypes['GET_POSTS'] = action;
            
            return{
                ...state,
                postsList:data.postsList
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;