(function(){
    var actualizarHora = function(){
        var fecha = new Date();
        var horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes();
        segundos = fecha.getSeconds();
        diaSemana = fecha.getDay();
        dia = fecha.getDate();
        mes = fecha.getMonth();
        anio = fecha.getFullYear();


    var pHoras = document.getElementById("horas"),
        pAMPM = document.getElementById("ampm"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pAnio = document.getElementById("year");

    var semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    pDiaSemana.textContent = semana[diaSemana];
    pDia.textContent = dia;
    var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    pMes.textContent=meses[mes];
    pAnio.textContent=anio;

    if (horas>=12){
        horas = horas-12;
        ampm = "PM";
    }else{
        ampm ="AM";
    }
    if (horas==0){
        horas=12;
    }
    
    pHoras.textContent = horas;
    if (minutos<10){
        pMinutos.textContent = "0"+minutos;
    }else{
        pMinutos.textContent = minutos;
    }
    
    pAMPM.textContent = ampm;
    if (segundos<10){
        pSegundos.textContent = "0"+segundos;
    }else{
        pSegundos.textContent = segundos;
    }
    


    };

    actualizarHora();
    var intervalo = setInterval(actualizarHora,1000);

}())