
const initalState = {
    item: ''
}

const reducer = (state = initalState, action: { type: string, item: string }) => {
    console.log('got it')
    switch (action.type) {
        case 'NEW_TRIP_COMPONENT':
            return {
                item: action.item
            }
        default:
            return state
    }
}
  
export default reducer