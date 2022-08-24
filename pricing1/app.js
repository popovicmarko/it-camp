let type= document.querySelectorAll(".type")
let xox= document.querySelector(".xox")

xox.addEventListener("click", e=>{
    type.forEach((el,ind, arr)=>{
        el.classList.toggle("active")
    })
})