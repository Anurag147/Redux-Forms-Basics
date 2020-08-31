import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer //form name should be kept as is to function properly. This is imposed by redux-form.
});

export default rootReducer;
