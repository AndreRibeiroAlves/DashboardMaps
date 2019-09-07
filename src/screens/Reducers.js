import { combineReducers } from 'redux';
import ModalReducer from './ModalReducer'
import SensoresReducer from './SensoresReducer.js'

const Reducers = combineReducers({

    modal:ModalReducer,
    sensores:SensoresReducer
    
});

export default Reducers;