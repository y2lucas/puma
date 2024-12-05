window.onload = function(){   
    var fundo = document.getElementById('FUNDO');
    var fundo1 = document.getElementById('FUNDO1');
    var img = document.getElementById('img');

    setTimeout(function(){
        fundo.style.transform = 'translateX(0)';
        fundo.style.opacity = 1;
    }, 200);

    setTimeout(function(){
        fundo1.style.transform = 'translateX(0)';
        fundo1.style.opacity = 1;
    }, 300);

    setTimeout(function(){
        img.style.transform = 'translateY(0)';
        img.style.opacity = 1;
    }, 50);
}