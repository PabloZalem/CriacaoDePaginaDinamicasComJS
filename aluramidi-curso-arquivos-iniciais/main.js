function tocaSom (selectorAudio){
    const elemento = document.querySelector(selectorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert("Elemento não encontrado");
        console.log("Elemento não encontrado");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    console.log(contador);

    tecla.onkeydown = function(evento){

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeydown = function(){
        tecla.classList.remove('ativa');
    }
}