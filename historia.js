window.onload = function(){
    var infoBox = document.getElementById('IMG');
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
    infoBox.style.transform = 'translateX(0)';
    infoBox.style.opacity = 1;
    }, 600);
}

function showInfoBox(event, boxId) {
    var infoBox = document.getElementById(boxId);
    infoBox.style.display = 'block';
    infoBox.style.left = (event.pageX + 20) + 'px';
    infoBox.style.top = (event.pageY + 20) + 'px';
    setTimeout(function() {
        infoBox.style.transform = 'translateY(0)';
        infoBox.style.opacity = 1;
    }, 0); // Aguarda o próximo ciclo de renderização para aplicar o efeito de slide
}

function hideInfoBox(boxId) {
    var infoBox = document.getElementById(boxId);    
    infoBox.style.transform = 'translateY(15px)'; // Move a caixa para baixo
    infoBox.style.opacity = 0; // Torna a caixa de informações totalmente transparente
    setTimeout(function () {
         infoBox.style.display = 'none'; // Esconde a caixa de informações após a transição
    }, 300); // Aguarda o término da transição (300ms no caso)
}
