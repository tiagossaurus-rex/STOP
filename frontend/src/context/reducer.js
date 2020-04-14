import { types } from './';

import {
    toggleLetter,
    toggleCategory,
    roundSettings,
} from './actions'

export const reducer = (state, action) => {
    // console.log(state, action);
    const { type, payload } = action;

    if (types[type] === undefined) {
        throw new Error('[reducer]: invalid action.type')
    }


    switch (type) {
        
        case types.DEFAULT:
            return state;
        
        case types.TOGGLE_LETTER:
            return toggleLetter(state, payload)
        
        case types.TOGGLE_CATEGORY:
            return toggleCategory(state, payload)
        
        case types.ROUND_SETTINGS:
            return roundSettings(state, payload)
        
        default:
            throw new Error('[reducer]: unkown action type')
            return state;
    }
}