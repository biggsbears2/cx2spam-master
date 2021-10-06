const axios = require("axios");

setInterval(() => {
    axios.post('').then(function(resposta) { // COLOQUE O SITE ALI NAS ASPA
    console.log(resposta.data)

})
}, 500); //AQUI VOCE SETA A VELOCIDADE, RECOMENDO 1000/500
    
// @biggsbears
 


