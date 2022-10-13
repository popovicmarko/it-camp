

color=["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]
o=["th", "st", "nd", "rd"]

for(i=0; i<color.length; i++){
    switch(i){
        case 0:
            console.log(`${i+1} ${o[1]} choise is ${color[i]}`)
        break;
        case 1:
            console.log(`${i+1} ${o[2]} choise is ${color[i]}`)
        break;
        case 2:
            console.log(`${i+1} ${o[3]} choise is ${color[i]}`)
        break;
        default:
            console.log(`${i+1} ${o[0]} choise is ${color[i]}`)
        break;
        
    }
}