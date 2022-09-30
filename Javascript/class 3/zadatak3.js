
brojmeseca = Number(prompt("Broj meseca"))


switch (brojmeseca) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('mesec ima 31')
        break;
    case 2:
        console.log('mesec ima 29')
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('mesec ima 30')
        break;



    default:
        console.log('Pogresan unos')
        break;
}