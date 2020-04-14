export function toggleLetter(state, payload) {
    const lettersList = state.lettersList.map(letter => {
        if (letter.id === payload.id) {
            return {
                ...letter,
                selected: !letter.selected,
            };
        }
        return letter;
    });

    return {
        ...state,
        lettersList,
    };
}
