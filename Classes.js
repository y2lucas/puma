window.onload = function(){
    var img = document.getElementById('img');
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    var img5 = document.getElementById('img5');
    var fundo = document.getElementById('FUNDO');
    var fundo1 = document.getElementById('FUNDO1');
    var fundo2 = document.getElementById('FUNDO2');

    setTimeout(function(){
        fundo.style.transform = 'translateY(0)';
        fundo.style.opacity = 1;
    }, 100);

    setTimeout(function(){
        fundo1.style.transform = 'translateX(0)';
        fundo1.style.opacity = 1;
    }, 200);

    setTimeout(function(){
        fundo2.style.transform = 'translateX(0)';
        fundo2.style.opacity = 1;
    }, 400);

    setTimeout(function(){
        img.style.transform = 'translateX(0)';
        img.style.opacity = 1;
    }, 500);

    setTimeout(function(){
        img1.style.transform = 'translateX(0)';
        img1.style.opacity = 1;
    }, 600);

    setTimeout(function(){
        img2.style.transform = 'translateX(0)';
        img2.style.opacity = 1;
    }, 750);

    setTimeout(function(){
        img3.style.transform = 'translateX(0)';
        img3.style.opacity = 1;
    }, 900);

    setTimeout(function(){
        img4.style.transform = 'translateX(0)';
        img4.style.opacity = 1;
    }, 1050);

    setTimeout(function(){
        img5.style.transform = 'translateX(0)';
        img5.style.opacity = 1;
    }, 1200);
}