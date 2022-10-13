// const animals = ['Bizon', 'Lav', 'Zirafa', 'Kamila', 'konj' ]

// // console.log(animals.slice(0,3))

// animals.splice(1, 3 , 'Feb')
// console.log(animals)

// for (let i=0; i<10; i++) {
//     element= Number(prompt("Ubacite elemente niza"));
//     niz.push(element)
// }

// MDN


niz = []
broj=1;

while (true) {
    broj= Number(prompt("Ubacite brojeve"))
    if(broj%3===0 && broj%5===0){
        break
    }
   
    niz.push(broj)
}

console.log(niz)

// Ako jeb  broj deljiv sa 3, ispisi Fizz
//ako je broj deljiv sa 5 da s eispisi Buzz
//Ako je i sa 3 i ns a5 ispisati FIZZBUZZ