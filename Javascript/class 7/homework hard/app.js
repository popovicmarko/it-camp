// Imamo funkciju koja prima 2 argumenta, 1 argument je niz a drugu je elemnt niza. Funkvija treba da vrati koliko se puta odradjeni elemnt pojavljuje u nizu
// [5, 25, ''apple", [25, "apple", "banana", "mango"]]

niz = ["apple", 25, "apple", [25, "apple", "banana", "mango"]]


function Nikola(array, element) {
    brojac = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j] === element) {
                    brojac++
                }
            }
        }
        
        else {
            if (array[i] === element) {
                brojac++
            }
        }

    }
    return brojac;
}
console.log(Nikola(niz, "apple"))