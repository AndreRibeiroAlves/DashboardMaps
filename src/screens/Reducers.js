import { combineReducers } from 'redux';
import ModalReducer from './ModalReducer'

const Reducers = combineReducers({

    modal:ModalReducer
    
});

export default Reducers;