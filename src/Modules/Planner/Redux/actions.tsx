export const changeLittleComponent = component => ({
    type: 'CHANGE_LITTLE_COMPONENT',
    component: component
})

export const changeBigComponent = component => ({
    type: 'CHANGE_BIG_COMPONENT',
    component: component
})

export const newTripComponent = (item: string) => ({
    type: 'NEW_TRIP_COMPONENT',
    name: item
})