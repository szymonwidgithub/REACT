import {combineReducers} from 'redux';
import users, {IUsersReducer} from './usersReducers';
import photos, {IPhotosReducers} from './photosReducers';
import todos, {ITodosReducers} from './todosReducers';
import posts, {IPostsReducers} from './postsReducers';
export default combineReducers({
    users,
    photos,
    todos,
    posts,
})
export interface IState {
    users: IUsersReducer;
    photos:IPhotosReducers;
    todos:ITodosReducers;
    posts:IPostsReducers;
}