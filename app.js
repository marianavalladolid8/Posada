function moverPositionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById('btn_si');
let btnNo = document.getElementById('btn_no');
let divposada = document.getElementsByClassName('posada') [0];

btnNo.addEventListener('mouseenter', function(e) { moverPositionRandom (e.target)});

btnSi.addEventListener('click',function(e) {
    alert('Sabía que dirian que Si :3')
    divposada.style.display = 'block';
   const cancion = new Audio("./Moto Luv SeemeeSoda Luv.mp3");
   cancion.play();
});