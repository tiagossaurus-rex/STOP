import { types } from './';

export const useActions = (state, dispatch) => {

    return {
        example(payload) {
            // console.log('useActions.example', payload);
            dispatch({
                type: types.DEFAULT,
                payload,
            });
        },
        toggleCategory(payload) {
            dispatch({
                type: types.TOGGLE_CATEGORY,
                payload,
            });
        },
        toggleLetter(payload) {
            dispatch({
                type: types.TOGGLE_LETTER,
                payload,
            });
        },
        roundSettings(payload) {
            dispatch({
                type: types.ROUND_SETTINGS,
                payload,
            });
        },
    }
}