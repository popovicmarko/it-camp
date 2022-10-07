

niz=[1,2,3,4,5,6,7,8,9,10]
parNiz=[]



for (let i = 0; i <niz.length; i++) {
    if (niz[i] % 2 === 0) {
        parNiz.push(niz[i])
    }
}
console.log(parNiz)
