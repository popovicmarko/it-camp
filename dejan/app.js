nes (7 sloc)  298 Bytes

let colors= document.querySelectorAll(".colorSelectorOption")
console.log(colors)

colors.forEach((item, index, arr)=> {
    item.addEventListener("click", e=>{
        document.body.style.setProperty("--clrAccent", getComputedStyle(item).getPropertyValue("background-color")) 
    })
})