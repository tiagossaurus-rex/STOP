import { constants } from "./constants";
import { getRandomLetter } from "./actions/getRandomLetter";
import { selectRandomCategories } from "./actions/selectRandomCategories";

export const initialState = (props = {}) => {
    const { categories, letters } = constants;

    const currentLetter = getRandomLetter(letters);

    

    const lettersList = letters.map((id) => ({
        id: id.toUpperCase(),
        selected: ['q', 'w', 'x', 'y', 'z'].indexOf(id) === -1,
    }));


    const categoriesList = categories.map((cat, i) => ({
        name: categories[i],
        id: i,
        selected: false,
    }));


    selectRandomCategories(categoriesList, 6);

    const selectedCategories = categoriesList.filter(c => c.selected);




    return {
        categoriesList,
        lettersList,
        roundSettings: {
            number: 3,
            duration: 90,
        },

        currentLetter,
        selectedCategories,


    };
};
