

// mojaVar=['value1', 'value2', 'value3', false, 12234];

// mojaVar.push('nova vrdnost')

// mojaVar.push(true) //dodavanje na kraju niza
// mojaVar.pop() //brisanje zadnjeg elemata u niza

// mojaVar1=mojaVar.pop()//cuvanje izbrisnaog elementa



// console.log(mojaVar);


// for(let i=0; i < mojaVar.lenght; i ++){
//     console.log(mojaVar[i], i);
// }



// j=0
// while(j<5){
//     console.log(mojaVar[j])
//     j++;
// }
parni = false;
varNiz = [1, 2, 3, 4, 5]
for (let i = 0; i < varNiz.length; i++) {
    if (varNiz[i] % 2 === 0) {
        parni=true;
        console.log(varNiz[i])
    }
}

if (parni) {
    console.log("imalo je parnih")
} else {
    console.log("nije imalo parnih")
}