let inputs= document.querySelectorAll("input")// svi inputi
let button= document.querySelector("button")

button.addEventListener("click", e=>{
    e.preventDefault();
    let test= inputs[2].value;
    test= Number(test)
    if(isNaN(test)){
        alert("Samo brojevi mogu u polje godista")
        return
    }

    inputs[3].value= inputs[0].value + inputs[1].value + inputs[2].value
})