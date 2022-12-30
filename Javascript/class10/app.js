
function Calc(nm1, nm2, operation) {
    switch (operation) {
        case '+':
            return nm1 + nm2
            break;
        case '-':
            return nm1 - nm2
            break;
        case '-':
            return nm1 / nm2
            break;
        case '-':
            return nm1 * nm2
            break;
        default:
            return 'Error'
    }
}

console.log(Calc(9, 5, '+'))
