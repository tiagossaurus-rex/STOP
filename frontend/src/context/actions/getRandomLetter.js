
export function getRandomLetter(letters) {

    const randomNumber = Math.floor(Math.random() * letters.length)

    return letters[randomNumber];
}