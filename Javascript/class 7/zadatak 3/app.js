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
    if (niz[i] > max){
        max = niz[i];} 
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