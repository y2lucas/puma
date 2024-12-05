window.onload = function(){
    var infoBox = document.getElementById('IMG');
    var fundo = document.getElementById('FUNDO');
    var fundo1 = document.getElementById('FUNDO1');
    var fundo2 = document.getElementById('FUNDO2');
    var botao = document.getElementById('botao');

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
    }, 300);

    setTimeout(function(){
        botao.style.transform = 'translateY(0)';
        botao.style.opacity = 1;
    }, 300);

    setTimeout(function(){
    infoBox.style.transform = 'translateX(0)';
    infoBox.style.opacity = 1;
    }, 500);
}