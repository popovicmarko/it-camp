


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
