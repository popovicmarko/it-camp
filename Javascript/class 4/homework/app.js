

broj = Number(prompt("Unesite broj koliko zelite brojeva da upisete."));
parniBroj = 0
neparniBroj = 0

for (let i = 1; i <= broj; i++) {
    upBrojevi = Number(prompt(i));
    console.log(upBrojevi);
}


if (upBrojevi % 2  === 0) {
    parniBroj = parniBroj + upBrojevi;
} else {
    parniBroj = parniBroj + upBrojevi;
}

console.log('Broj parnih brojeva je:', parniBroj);
console.log('Broj neparnih brojeva je:', neparniBroj);
