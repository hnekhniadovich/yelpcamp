import _ from 'lodash';
import { FETCH_CAMPS, FETCH_CAMP } from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_CAMPS:
            return {...state, ..._.mapKeys(action.payload, '_id') };
        case FETCH_CAMP:
            return {...state, [action.payload._id]: action.payload };
    default:
        return state;
    }
}