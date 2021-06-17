import { ISinglePhoto} from '../entities/photos';
import  * as actionTypes from '../actions/actionTypes/photoTypes';

export interface IPhotosReducers {
    photosList: ISinglePhoto[];
}

const defaultState = (): IPhotosReducers => ({
    photosList: []
});

const reducer= (state=defaultState(), action: any ) =>{
    switch(action.type){
        case actionTypes.GET_PHOTOS: {
            const data: actionTypes.IPhotosTypes['GET_PHOTOS'] = action;
            
            return{
                ...state,
                photosList:data.photosList
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;