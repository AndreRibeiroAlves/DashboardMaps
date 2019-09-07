export const closeModal = () => {
    return{
        type: "closeModal",
        payload: {
            modalEnabled: false
        }
    };
}
export const changeMarker = (id) => {
    return{
        type: "changeMarker",
        payload: {
            selectedMarkerID: id
        }
    };
}

export const openModal = (markerId) => {
    return{
        type: "openModal",
        payload: {
            selectedMarkerID: markerId,
            modalEnabled: true
        }
    };
};