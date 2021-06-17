import {ISingleUser} from "../entities/users"
import * as actionTypes from "../actions/actionTypes/userTypes"
export interface IUsersReducer {
    usersList: ISingleUser[];
}

const defaultState= (): IUsersReducer => ({
    usersList: []
});

const reducer= (state=defaultState(), action: any ) =>{
    switch(action.type){
        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes['GET_USERS'] = action;
            
            return{
                ...state,
                usersList:data.usersList
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;