let progreso =document.querySelector('.progreso')
let porcentaje = document.querySelector('.porcentaje')
let celebracion = document.querySelector('body')
let avance = 0

let tiempo = setInterval(() => {
    avance += 1
   
    progreso.style.width=`${avance}%`//aplicarle un estoli al ancho de la barra de progreso , se rellena deacuerdo a avanve(de 1 en 1)
    if(avance===100){//cuando avance se igual a 100 para el interval y agregueme la clase celebracion
        clearInterval(tiempo)
        celebracion.classList.add('celebracion')
    }
    porcentaje.textContent=`${avance}%`   //para poder ver el progreso del porcetanje (el numero)
}, 86);//que el intervalo se refresque en 75mls