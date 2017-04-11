import { combineReducers } from 'redux';
import PostsReducer from './reducer-post'

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;