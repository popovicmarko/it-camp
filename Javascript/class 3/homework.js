// U ZAOVINSOTI OD BROJA MESECA ODEDRITI U KOJOJ CETVRTINI GODINE SE NALAZI

mesec = Number(prompt('Unesite broj meseca'))

if (mesec <= 3 && mesec > 0) {
    console.log('Mesec je u 1. cetvrtini')
} else if (mesec > 3 && mesec <= 6) {
    console.log('Mesec je u 2. cetvrtini')
} else if (mesec > 6 && mesec <= 9) {
    console.log('Mesec je u 3. cetvrtini')
} else if (mesec > 9 && mesec <= 12) {
    console.log('Mesec j eu 4. cetvrtini')
} else {
    console.log('Pogresan unos meseca')
}