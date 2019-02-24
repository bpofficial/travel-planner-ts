const formMap = (state = {focus: {}, editing: false, click: null}, action) => {
    switch (action.type) {
        case "NEW_MARKER":
            return {
                focus: {
                    description: action.data.address,
                    lat: action.data.lat,
                    lng: action.data.lng,
                },
            };
        case "MAP_CLICK":
            return {
                ...state,
                click: state.editing ? action.event : null,
            };
        case "EDITING":
            return {
                ...state,
                editing: true,
            };
        default:
            return state;
    }
};

export { formMap };
