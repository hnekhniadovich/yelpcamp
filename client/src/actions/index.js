import camps from '../apis/camps';

import { 
    FETCH_CAMPS,
    FETCH_CAMP
    // CREATE_CAMP,
    // EDIT_CAMP,
    // DELETE_CAMP
 } from './types';

export const fetchCamps = () => async dispatch => {
    const response = await camps.get('/camps');

    dispatch({ type: FETCH_CAMPS, payload: response.data });
};

export const fetchCamp = (id) => async dispatch => {
    const response = await camps.get(`/camps/${id}`);

    dispatch({ type: FETCH_CAMP, payload: response.data });
};







 
