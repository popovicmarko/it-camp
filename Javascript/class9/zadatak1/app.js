
// function Parnost(br1) {
//     if (br1 % 2 === 0) {
//         console.log("Funkcija je parna")
//     } else {
//         console.log("funkcijan nije parna")
//     }
// }

// function Negativnost(br2) {
//     if (br2 < 0) {
//         console.log("Broj je nagativan")
//     } else {
//         console.log("Broj je pozitivan")
//     }
// }

// Parnost(2)
// Negativnost(-2)

function unosNiz(niz) {

    
        for ( let i = 0; i < 5; i++) {
            clan = Number(prompt('Unesite elementa niza'))
            niz.push(clan)
        }
    
}
 niz=[]



function poarnostNiz(niz) {
    for (let i = 0; i <= niz.length; i++)
        if (niz[i] % 2 === 0) {
            console.log(niz[i])
        }
}

function obrnutoNiz(niz) {
    for (let i = niz.length; i >= 0; i--) {

        console.log(niz[i])
    }

}

function ispisNiz(niz) {
    for (let i = 0; i < niz.length; i++) {

        console.log(niz[i])
    }

}

unosNiz(niz)

obrnutoNiz(niz)

poarnostNiz(niz)