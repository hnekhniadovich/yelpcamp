import camps from '../apis/camps';
import history from '../history';

import { 
    FETCH_CAMPS,
    FETCH_CAMP,
    CREATE_CAMP,
    EDIT_CAMP,
    DELETE_CAMP,
    CREATE_COMMENT
 } from './types';

export const fetchCamps = () => async dispatch => {
    const response = await camps.get('/camps');

    dispatch({ type: FETCH_CAMPS, payload: response.data });
};


export const fetchCamp = (id) => async dispatch => {
    const response = await camps.get(`/camps/${id}`);

    dispatch({ type: FETCH_CAMP, payload: response.data });
};

export const createCamp = formValues => async (dispatch) => {
    const response = await camps.post('/camps', { ...formValues } );
    
    dispatch({ type: CREATE_CAMP, payload: response.data });

    //Do some programmatic navigation to
    //get the user back to the root route
    
    history.push('/camps');
} 

export const editCamp = (id, formValues) => async (dispatch) => {
    const response = await camps.put(`/camps/${id}`, formValues );

    dispatch({ type: EDIT_CAMP, payload: response.data });
    history.push(`/camps/${id}`);
}

export const deleteCamp = (id) => async dispatch => {
    await camps.delete(`/camps/${id}`);

    dispatch({ type: DELETE_CAMP, payload: id });
}

export const createComment = (id, formValues) => async (dispatch) => {
    const response = await camps.post(`/camps/${id}/comment`, { ...formValues } );
    
    dispatch({
        type: CREATE_COMMENT,
        payload: {
            data: response.data,
            campId: id
        }
    });

    history.push(`/camps/${id}`);
}

export const deleteComment = (id, comment_id) => async dispatch => {
    const response = await camps.delete(`/camps/${id}/comment/${comment_id}`);

    dispatch({
        type: FETCH_CAMP,
        payload: response.data
    });
}


    
 







 
