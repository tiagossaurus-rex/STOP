import { types } from './';

export const reducer = (state, action) => {
    // console.log(state, action);
    if (types[action.type] === undefined) {
        throw new Error('[reducer]: invalid action.type')
    }

    switch (action.type) {
        
        case types.DEFAULT:
            return state;
        
        default:
            return state;
    }
}