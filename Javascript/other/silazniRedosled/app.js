



// function descendingOrder(numer){
//     newNumer=String(numer)
//     temp=''

//     for(let i=newNumer.length-1; i>=0; i--){
//         temp+=newNumer[i]
//     }
//     temp.join('')
//     console.log(temp)
    
// }

// descendingOrder(1421234)

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }
// function descendingOrder(n){
//     let finalFigure = String(n).split('').sort(). reverse().join('')
//     return finalFigure
//   }
//    console.log(descendingOrder(195282))


var count = 0;

function persistence(num) {
  if (num.toString().length === 1) {
    return count;
  }
  count++;
  var mult = 1;
  var splitStr = num.toString().split("");
  for (var i = 0; i <= splitStr; i++) {
    mult *= parseFloat(splitStr[i])
  }
  return persistence(parseFloat(mult));
}
console.log(persistence(232))


