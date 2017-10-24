//Document representa a pagina inteira no navegador e contem o DOM completo.
// Estamos pedindo ao document para pegar um elemento atraves do getElementById,
// assim o getElementById retorna o elemento paragrafo correspondente a "greenplanet"
// Entao o codigo o JavaScrip pode fazer todo tipo de coisa interessante com ele.
var planet = document.getElementById("greenplanet");
console.log(planet.innerHTML);
planet.innerHTML = "Red Alert: hit by phaser fire!";
