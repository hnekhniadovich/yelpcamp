import camps from '../apis/camps';

import { FETCH_CAMPS } from './types';

// export const selectCamp = camp => {
//     //return an action
//     return {
//         type: 'CAMP_SELECTED',
//         payload: camp
//     };
// };

export const fetchCamps = () => async dispatch => {
    const response = await camps.get('/');

    dispatch({ type: FETCH_CAMPS, payload: response.data })
}