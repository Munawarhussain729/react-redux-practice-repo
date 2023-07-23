const reducer = (state = 0, action) => {
    if (action.type === 'increment') {
        return state + action.payload
    } else if (action.type === 'decrement') {
        if (state > 0) {
            return state - action.payload
        }
        return 0
    }
    else {
        return state
    }

}
export default reducer