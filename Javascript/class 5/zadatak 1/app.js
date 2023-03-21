broj= new Number();
brojZaTrazenje= Math.floor(Math.random()*100)

while(true){
    broj= Number (prompt("uneiste broj."))    
    if(broj==0 || broj===brojZaTrazenje){
        break;
    }
    if (broj < brojZaTrazenje){
        alert('U uneite veci')
        break;
    }
    if (broj > brojZaTrazenje){
        alert("Unesite manji")
    }
}

if(broj===brojZaTrazenje){}
alert("Tacan broj");
