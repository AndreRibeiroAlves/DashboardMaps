const initialState = {
    selectedMarkerID: 0,
    modalEnabled: false,
};

const ModalReducer = (state = [], action) =>{
    if(state.length == 0){
        return initialState;
    }
    if(action.type == "openModal"){
        return{
            selectedMarkerID: action.payload.selectedMarkerID,
            modalEnabled: action.payload.modalEnabled
        };
    }else if(action.type == "closeModal"){
        return{
            ...state, modalEnabled:action.payload.modalEnabled
        };
    }else if(action.type == "changeMarker"){
        return{
            ...state,  selectedMarkerID: action.payload.selectedMarkerID
        };
    }
    return state;
}

export default ModalReducer;