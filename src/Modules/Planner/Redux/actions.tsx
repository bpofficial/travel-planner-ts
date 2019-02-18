export const changeLittleComponent = (component) => ({
    component,
    type: "CHANGE_LITTLE_COMPONENT",
});

export const changeBigComponent = (component) => ({
    component,
    type: "CHANGE_BIG_COMPONENT",
});

export const newTripComponent = (item: string) => ({
    name: item,
    type: "NEW_TRIP_COMPONENT",
});
