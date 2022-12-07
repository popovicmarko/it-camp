

//Izdvaja najkracu rec u recenici

// function findShort(recenica){
//      var arr = recenica.split(' ')
//      var smallest = arr[0]

//      for(let i = 0; i < arr.length; i++){
//         if(arr[i].length < smallest){
//             smallest=arr[i]
//         }
//      }
//      return smallest.length;
// }
function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return smallest.length;
  }
console.log(findShort('jjuhsfd ovo je ovo cico'))