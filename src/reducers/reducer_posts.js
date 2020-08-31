import {FETCH_POSTS, FETCH_POST} from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
    
    switch(action.type){

        case FETCH_POST:
            const post = action.payload.data;
            const newState = {...state};
            newState[post.id]=post//replace old post data in state
            return newState;

        case FETCH_POSTS:
            return _.mapKeys(action.payload.data,'id');//convert array to key value pair objects

        default:
            return state;    
    }
}
