let input= prompt('Unesite automobilsku registraciju');

const re= /([A-z]+[A-z])+[-]+([0-9]+[0-9]+[0-9])+[-]+([A-z]+[A-z])/g
let resulte= input.match(re)
if(resulte==null){
    alert("Unesite ispravan format: ss-bbb-ss")
}
else{
    document.write(`Izabrana registracija je ${input}`)
}