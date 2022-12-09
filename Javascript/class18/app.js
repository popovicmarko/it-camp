// const body= document.querySelector("body")
// body.insertBefore()

// const div = document.createElement("div");
// div.innerHTML = "Hello world";
// document.body.appendChild(div);

// const newBody= '<p></p>' + body.innerHTML
// body.innerHTML=newBody
// console.log(body)

// const script= document.querySelector("#script1")
// const body= document.querySelector("body")

// const p = document.createElement('p')
// p.innerHTML= "Hello world"
// body.insertBefore(p, script)

// console.log(body

const name = prompt("Your name")
const surname = prompt("Your surname")
const contentDiv= document.getElementById("content")

// const p = document.createElement('p')
// p.innerHTML= "Tvoje ime je " + name + "a prezime je:" + surname;


contentDiv.innerHTML = 
'<p>Tvoje ime je: '+ name + ' ,a prezime: ' + surname; +"</p>"



