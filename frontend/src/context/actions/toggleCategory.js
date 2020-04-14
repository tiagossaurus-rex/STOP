export function toggleCategory(state, payload) {
    const { id } = payload;
    
    const categoriesList = [...state.categoriesList];
    categoriesList[id].selected = !categoriesList[id].selected;
    
    const selectedCategories = categoriesList.filter(c => c.selected);

    return {
        ...state,
        categoriesList,
        selectedCategories
    };
}
