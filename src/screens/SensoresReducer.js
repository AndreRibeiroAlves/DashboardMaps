import Sensores from 'objects/Sensores'

const initialState = {
    markers: new Sensores().estado.markers
};

const SensoresReducer = (state = [], action) =>{
    if(state.length == 0){
        return initialState;
    }
    if(action.type == "_mapReady"){
        state.markers[0].mark.showCallout();
    }
    return state;
}

export default SensoresReducer;