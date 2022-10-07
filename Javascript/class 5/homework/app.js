let prviBroj, drugiBroj, Oper, Rez

while (true) {
    2

    Oper = Number(prompt("Unesite jednu od sledecih opcija \n 0: Izdji iz programa \n 1: Sabiranje \n 2: Oduzimanje \n 3: Mnozenje \n 4: Deljenje"))
    prviBroj = Number(prompt("Unesite prvi broj"))
    drugiBroj = Number(prompt("Unesite drugi broj"))

    if (Oper === 0) {
        break;
    }
    else if (Oper === 1) {
        Rez = prviBroj + drugiBroj
    }
    else if (Oper === 2) {
        Rez = prviBroj - drugibroj
    }
    else if (Oper === 3) {
        Rez = prviBroj * drugiBroj
    }
    else if (Oper === 4) {
        Rez = prviBroj / drugiBroj
    }

    alert(`Resenje operacije: ${Rez}`)
}
