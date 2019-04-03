import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import history from '../history';
import camps from '../apis/camps';
import jwt_decode from 'jwt-decode';

// Register User
export const registerUser = userData => async dispatch => {
    try {
        await camps.post('/register', userData);
        history.push('/login');
    } catch(err) {
        dispatch({ type: GET_ERRORS, payload: err.response.data })
    }
};

//Login - Get User Token
export const loginUser = (userData) => async dispatch => {
    try {
        const response = await camps.post('/login', userData);
        // Save to localStorage
        const { token } = response.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
        history.push('/camps');
    } catch(err) {
        dispatch({ type: GET_ERRORS, payload: err.response.data }); 
        
    }
}

// Set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };   
};

// Log user out
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
}

