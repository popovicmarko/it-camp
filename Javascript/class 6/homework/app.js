niz = []
min = Infinity
max = -Infinity

for ( let i = 0; i < 10; i++) {
    clan = Number(prompt('Unesite elementa niza'))
    niz.push(clan)
}


for (let i = 0; i < niz.length; i++) {
    if (niz[i] < min) {
        min = niz[i]
    }
    else if (niz[i] > max) {
        max = niz[i]
    }
}

console.log("Najveci element u nizu je:", max);
console.log("Najmanji element u nizu je:", min);