export function request(state = {}, action) {
    switch (action.type) {
        case 'SAVE':
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
