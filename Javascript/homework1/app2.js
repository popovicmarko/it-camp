
// ZADATAK 2


a = Number(prompt("Unesite broj A"))
b = Number(prompt("Unesite broj B"))
if (a > 0 && b < a) {
    console.log(true)
    if (a > b || b > 0) {
        console.log(true)
    } else (
        console.log(false)
    )
} else {
    console.log(false)
}