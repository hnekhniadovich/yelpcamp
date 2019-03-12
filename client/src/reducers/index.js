import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import campReducer from './campReducer';

export default combineReducers ({
    camps: campReducer,
    form: formReducer
});

