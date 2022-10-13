arr1 = [1, 0, 2, 3, 5]
arr2 = [3, 4, 6, 7, 8, 13]
niz = []
zbrir = 0


for (let i = 0; i < arr1.length; i++) {
 niz.push(arr1[i])
}

for (let i = 0; i < arr2.length; i++) {
    niz[i]+= arr1[i]

}

console.log(niz)