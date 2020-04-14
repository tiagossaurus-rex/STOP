export function selectRandomCategories(categories, num) {
    while (num > 0) {
        const r = Math.floor(Math.random() * categories.length);
        if (!categories[r].selected) {
            num--;
            categories[r].selected = true;
        }
    }
}
