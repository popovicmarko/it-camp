//U zavisnosti od broja meseca odrediti u koji cetvrtinu gosine se mesec nalazi

brojMeseca=Number(prompt("Uneti rednibroj meseca."))

if(brojMeseca <= 4){
    console.log('Mesec se nalazi u 1. cetvrtini godine.')
} else if (brojMeseca <= 8){
    console.log('Mesec se nalazi u 2. cetvrtini godine.')
} else if (brojMeseca <= 12){
    console.log("Mesec se nalazi u 3. cetvrtini godine.")
} else{
    console.log("Progresan unos")
}