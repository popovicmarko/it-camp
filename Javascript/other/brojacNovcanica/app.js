//Racunanje vrednosti novacnica



// brojNovcanica=Number(prompt('Uneti broj novcanica'))
// vrednostNovcanica=Number(prompt('Uneti vrednost novcanica'))

function vrednostNovca(brojNovcanica5, brojNovcanica10, brojNovcanica20, brojNovcanica50, brojNovcanica100, brojNovcanica200, brojNovcanica500, vrednost) {
    vrednost =  brojNovcanica5 * 5;
    vrednost = vrednost + (brojNovcanica10 * 10)
    vrednost = vrednost + (brojNovcanica20 * 20)
    vrednost = vrednost + (brojNovcanica50 * 50)
    vrednost = vrednost + (brojNovcanica100 * 100)
    vrednost = vrednost + (brojNovcanica200 * 200)
    vrednost = vrednost + (brojNovcanica500 * 500)
   console.log(vrednost)
}

vrednostNovca(Number(prompt('Uneti broj novcanica od 5e')), Number(prompt('Uneti vrednost novcanica 10e')), Number(prompt('Uneti broj novcanica od 20e')),Number(prompt('Uneti broj novcanica od 50e')),Number(prompt('Uneti broj novcanica od 100e')),Number(prompt('Uneti broj novcanica od 200e')),Number(prompt('Uneti broj novcanica od 500e')))

