// Imamo funkciju koja prima 2 argumenta, 1 argument je niz a drugu je elemnt niza. Funkcija treba da vrati koliko se puta odradjeni elemnet pojavljuje u nizu
// [5, 25, ''apple", [25, "apple", "banana", "mango"]]

niz = ["apple", 25, "apple", [25, "apple","apple", "banana", "mango"]]


function Nikola(array, element) {
    brojac = 0;

    for (let i = 0; i < array.length; i++) { //prolazimo kroz niz
        if (Array.isArray(array[i])) {   // ispitiujemo da li je niz na indeksu
            for (let j = 0; j < array[i].length; j++) { //prolazimo kroz niz u nizu i ispitujemo ima li istih elemenat
                if (array[i][j] === element) {
                    brojac++
                }
            }
        }
        
        else {
            if (array[i] === element) { //preborojava iste elementa (ako nije niz)
                brojac++
            }
        }

    }
    return brojac;
}
console.log(Nikola(niz, "banana"))