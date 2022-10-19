niz = []
broj=1;

while (true) {
    broj= Number(prompt("Ubacite brojeve"))
    if(broj%3===0){
        console.log("FIZZ")
    }

    if( broj%5===0){
        console.log('BUZZ')
    }

    if(broj%3===0  && broj%5===0 ){
        console.log('FIZZBUZZ')
        break
    }
   
    niz.push(broj)
}

console.log(niz)
console.log(niz.length)

