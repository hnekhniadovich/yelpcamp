import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import campReducer from './campReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers ({
    camps: campReducer,
    form: formReducer,
    auth: authReducer,
    errors: errorReducer
});

