import _ from 'lodash';
import { 
    FETCH_CAMPS, 
    FETCH_CAMP,
    CREATE_CAMP,
    EDIT_CAMP,
    DELETE_CAMP,
    CREATE_COMMENT
} from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_CAMPS:
            return {...state, ..._.mapKeys(action.payload, '_id') };
        case FETCH_CAMP:
            return {...state, [action.payload._id]: action.payload };
        case CREATE_CAMP:
            return {...state, [action.payload._id]: action.payload };
        case EDIT_CAMP:
            return {...state, [action.payload._id]: action.payload };
        case DELETE_CAMP:
            return _.omit(state, action.payload);
        case CREATE_COMMENT:
            const cId = action.payload.campId;
            const oldComments = state[cId].comments;
            return {...state, [cId]: {...state[cId], comments: [...oldComments, action.payload.data] } };
    default:
        return state;
    }
}