export function roundSettings(state, payload) {
    return {
        ...state,
        roundSettings: {
            ...state.roundSettings,
            ...payload,
        },
    };
}
