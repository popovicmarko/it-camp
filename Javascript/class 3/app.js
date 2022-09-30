
sati = Number(prompt("Uesiti broja"))

switch (true) {
    case sati < 0:
        console.log('Pogresan unos');
        break;
    case sati < 10:
        console.log('Jutro');
        break;

    case sati < 12:
        console.log('Podne');
        break;

    case sati < 18:
        console.log('Predvece');
        break;

    case sati < 22:
        console.log('Vece');
        break;

    case sati < 25:
        console.log('Noc')
        break;
    default:
        console.log('Pogresan unos')
        break;



}