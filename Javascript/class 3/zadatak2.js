a = Number(prompt("Uesiti a broj"))
b = Number(prompt("Uesiti b broj"))
c = Number(prompt("Uesiti c broj"))

switch (true) {
    case a >= b && b >= c: // a>b>c
        console.log('Broj a je najveci');
        console.log(a, b, c)
        break;
    case a >= c && c >= b:
        console.log('Bro b je najveci');
        console.log(a, c, b)
        break;
    case b >= a && b >= c:
        console.log('Bro c je najveci');
        console.log(b, a, c)
        break;
    case b >= c && c >= a:
        console.log('Bro c je najveci');
        console.log(b, c, a)
        break;

    case c >= b && b >= a:
        console.log('Bro c je najveci');
        console.log(c, b, a)
        break;

    case c >= a && a >= b:
        console.log('Bro c je najveci');
        break;


    default:
        console.log('Pogresan unos')
        break;
}