function ObrniBroj(broj) {
    brojString=String(broj)
    temp = " "
    for (let i=brojString.length-1; i>=0; i--) {
        temp+=brojString[i]
        
    }
  console.log(temp)
}

function Palindrom (rec) {
    rec=rec.toLowerCase()
    isPalin= true
    for (let i=0; i<rec.length/2; i++) {
        if(rec[i]!=rec[rec.length-1-i]) {
            console.log("Nije palnidrom")
            isPalin= false
            break;
        }
    }
    if(isPalin)
    console.log("Jeste palindrom")
}

ObrniBroj(123)
Palindrom("Dzemil")