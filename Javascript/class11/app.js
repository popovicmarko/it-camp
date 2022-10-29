// function cunstomSlice  ( arr, startIndex, endIndex){
//     if(!startIndex){
//         startIndex=0;
//     }
//     if(!endIndex){
//         endIndex=arr.length;
//     }
//     MyArr= []
//     for(let i = startIndex; i < endIndex; i++){
//         MyArr.push(arr[i])
//     }
//     return MyArr
// }


// const animals = ["ant", "bison", "camel", "duck", "elephet"]
// subArr = cunstomSlice(animals)
// console.log(subArr)

function isPrime(number){
    if(number%2 === 0 ){
        return false;
    } else if(number % 3 === 0){
        return folse;
    } else if( number % 5 === 0){
        return folse;
    }
     for(let i = 7; i < number.length; i ++){
        if ( number % i === 0){
            return false;

        }
     }
     return true;
}
 myNumber = 76;
 if ( isPrime(myNumber)){
    console.log("broj je prost")
 } else{
    console.log("broj nije prost")
 }



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