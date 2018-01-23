function numeroAleatorio(limite){
    return Math.floor(Math.random() * limite);
}

function obtenerDistancia(e, objetivo){
    let diffX = e.offsetX - objetivo.x;
    let diffY = e.offsetY - objetivo.y;
    return Math.sqrt((diffX*diffX) + (diffY*diffY));
}

function pistaDistancia(distancia){
    if (distancia < 30){
        return "Hirbiendo";
    }else if(distancia < 40){
        return "Muy Caliente";
    }else if (distancia < 60){
        return "Caliente";
    }else if (distancia < 100){
        return "Tibio";

    }else if (distancia < 180){
        return "Frio";
    }else if (distancia < 360){
        return "Helado";
    }else{
        return "Congelado";
    }
}

