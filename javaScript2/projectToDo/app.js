//Needed things
let mainInput = document.querySelector("input[id='value']")
let submit = document.querySelector(".main-button")
let Container = document.querySelector(".todos")

submit.addEventListener("click", e=> {
    e.preventDefault()
    
    //Todo thing
    let newTodo = document.createElement("div")
    newTodo.classList.add("todo")
    newTodo.innerHTML = `<h2>${mainInput.value}</h2>`
    Container.appendChild(newTodo)


    
    //X button
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "x"
    newTodo.appendChild(deleteButton)
    deleteButton.addEventListener("click", e=> {
        Container.removeChild(newTodo)
    })
})


function validateIme() {
    let imeInput = document.getElementById("value");
    
    if (imeInput.value === "") {
        imeError.innerHTML = "Molimo unesite ime";
    } 
}

// const hederTitle = document.all[10];
// console.log(hederTitle)

// hederTitle.innerHTML="<h1>New Logo</h1>";


const hederTitle = document.getElementById("logo")
console.log(hederTitle)

const listItems = document.getElementsByTagName("h1")
console.log(listItems)

