niz = [];
max = -Infinity;
min = Infinity;
maxdrugi = -Infinity;
mindrugi = Infinity;


for (let i = 0; i < 10; i++) {
    element = Number(prompt("Ubacite elemente niza"));
    niz.push(element)
}


for (let i = 0; i < niz.length; i++) {
    if (niz[i] > max) {
        max = niz[i];
    }
    if (niz[i] < min) {
        min = niz[i]
    }
}

for (let i = 0; i < niz.length; i++) {
    if (niz[i] < mindrugi && niz[i] > min)
        mindrugi = niz[i];
    if (niz[i] > maxdrugi && niz[i] < max) {
        maxdrugi = niz[i]
    }
}

console.log("Drugi najveci je", maxdrugi);
console.log("Drugi najmanji je", mindrugi)



function amountTocoins(number) {
    appReturn = []
    while (number > 0) {
        if (number >= 25) {
            number = number - 25;
            appReturn.push(25)

        } else if (number >= 10) {
            number = number - 10
        } else if (number >= 5) {
            number = number - 5;
            appReturn.push(10)
        } else if (number >= 2) {
            number = number - 2;
            appReturn.push(2)
        } else if (number >= 1) {
            number = number - 1;
            appReturn.push(1)
        }
    }
    return appReturn;
}
res = amountTocoins(46)
console.log(res)