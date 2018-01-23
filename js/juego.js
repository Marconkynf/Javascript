const WIDTH=400;
const HEIGH=400;

let objetivo = {

    x: numeroAleatorio(WIDTH),
    y: numeroAleatorio(HEIGH)
};

let $mapa = document.getElementById("map");
let $distance = document.getElementById("distance");
let $encontrado = document.getElementById("encontrado");
let clicks = 0;
let $tesoro = document.getElementById("tesoro");
let $titulo = document.getElementById("tituloG");

$mapa.addEventListener("click", function (e){
    clicks++;
    let distancia = obtenerDistancia(e, objetivo);
    let pista = pistaDistancia(distancia);
    $distance.innerHTML = `<h1>${pista}</h1>`
    
    if (distancia < 20){
        $tesoro.src = "../imagenes/tesoro.png";
        $tesoro.width = "400";
        $tesoro.height = "400";
        $mapa.src="";
        $mapa.width="0";
        $mapa.height="0";
        alert(`Lo encontraste en ${clicks} intentos.`);
        $distance.innerHTML = "";
        $encontrado.innerHTML = `<h2><center>Felicidades, lo encontraste!</br>Presiona la imagen para volver a intentar.</center></h2>`;
        $titulo.innerHTML = "";
        //location.reload();
    }
})
 $tesoro.addEventListener("click", function (){
     location.reload();
 })

