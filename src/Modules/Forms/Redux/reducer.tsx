const initState = {
    click: undefined,
    editing: false,
    focus: {
        description: "",
        lat: 0,
        lng: 0,
    },
};

const formMap = (state = initState, action) => {
    switch (action.type) {
        case "NEW_MARKER":
            return {
                ...state,
                focus: {
                    description: action.data.address,
                    lat: action.data.lat,
                    lng: action.data.lng,
                },
            };
        case "MAP_CLICK":
            return {
                ...state,
                click: state.editing ? action.event : undefined,
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
