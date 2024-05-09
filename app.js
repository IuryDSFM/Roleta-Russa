municoes = [];
let validaMuni = 0;
let vida = 4;
let vidaInimigo = 4;

let posicao = 0;
let atirar = document.getElementById("atirar");
let arriscar = document.getElementById("arriscar");

let validar;
let mC = 0;
let mV = 0;
let mcInicio = 0;
let mvInicio = 0;
let possibilidades;
let carregador = 0;
let tCarregador = 0; // OLHAR A PARTIR DAQUI

function recarregar() {
    posicao = 0;
    mC = 0;
    mV = 0;

    do {
        carregador = Math.round((Math.random() * 10));
        console.log("Número de munições: " + carregador);

    } while (carregador < 2 || carregador > 5);



    for (let i = 0; i <= (carregador - 1); i++) {
        municoes[i] = Math.round(Math.random());
        validaMuni = validaMuni + municoes[i];
        if (validaMuni == 0 && municoes[(carregador - 1)] == 0 || validaMuni == carregador && municoes[(carregador - 1)] == 1) {
            i = 0;
            validaMuni = 0;
        }
        municoes[i] == 1 ? mcInicio++ : mvInicio++;
    }
    console.log(municoes);
    console.log(validaMuni);

    console.log(municoes[carregador]);

    console.log(`Balas carregadas: ${mcInicio}
                \nBalas vazias: ${mvInicio}`);

    alert(`Balas carregadas: ${mcInicio}
                \nBalas vazias: ${mvInicio}`);

    validaMuni = 0;
    mcInicio = 0;
    mvInicio = 0;
};

function fcAtirar() {

    if (municoes[posicao] == 1) {
        vidaInimigo--;
        validar = true;
        posicao++;
        console.log(`Vez do jogador!
        \nAcertou o tiro!
        \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);

        alert(`Vez do jogador!
        \nAcertou o tiro!
        \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);

        escolha = false;
        fim();
    } else if (municoes[posicao] == 0) {
        validar = false;
        posicao++;
        console.log(`Vez do jogador!
        \nErrou o tiro!
        \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);

        alert(`Vez do jogador!
        \nErrou o tiro!
        \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);

        if (posicao == carregador) {
            recarregar();
        }

        acaoDemo();
    }

    if (posicao == carregador) {
        recarregar();
    }


};

function fcArriscar() {

    if (municoes[posicao] == 0) {
        validar = true;
        posicao++;
        console.log(`Vez do jogador!
        \nUfa! Era uma vazia
        \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);

        alert(`Vez do jogador!
        \nUfa! Era uma vazia
        \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);
    } else if (municoes[posicao] == 1) {
        vida--;
        validar = false;
        posicao++;
        console.log(`Vez do jogador!
        \nDroga! Era uma carregada!
        \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);

        alert(`Vez do jogador!
        \nDroga! Era uma carregada!
        \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);

        if (posicao == carregador) {
            recarregar();
        }

        escolha = true;
        fim();

    }

    if (posicao == carregador) {
        recarregar();
    }

}

function acaoDemo() {
    mC = 0;
    mV = 0;
    atirar.disabled = true;
    arriscar.disabled = true;

    //Verifica a possibilidade de acerto e erro
    for (let i = posicao; i <= (carregador - 1); i++) {
        municoes[i] == 0 ? mV++ : mC++;
    }

    //Escolhe a opção de acordo com as possibilidades
    possibilidades = mC / mV;

    if ((Math.random() * 10) > 8) {
        (Math.random() * 10) <= 5 ? possibilidades = 1 : possibilidades = 0;
        console.log("ele agiu sem pensar kkk");

        alert("ele agiu sem pensar kkk");
    }

    //Inimigo atira no player
    if (possibilidades >= 1 || possibilidades == Infinity) {
        if (municoes[posicao] == 1) {
            vida--;
            console.log(`Vez do Inimigo!
            \nVocê foi atingido!
            \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);

            alert(`Vez do Inimigo!
            \nVocê foi atingido!
            \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);
            posicao++;

            if (posicao == carregador) {
                recarregar();
            }

            escolha = true;
            fim();
        } else if (municoes[posicao] == 0) {
            console.log(`Vez do Inimigo!
            \nVocê se livrou!
            \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);

            alert(`Vez do Inimigo!
            \nVocê se livrou!
            \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);
            posicao++;
        }
    } else {

        if (municoes[posicao] == 0) {
            console.log(`Vez do Inimigo!
            \nEle teve sorte!
            \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);

            alert(`Vez do Inimigo!
            \nEle teve sorte!
            \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);
            posicao++;

            if (posicao == carregador) {
                recarregar();
            }

            acaoDemo();
        } else {
            vidaInimigo--;
            console.log(`Vez do Inimigo!
            \nEle se atingiu!
            \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);

            alert(`Vez do Inimigo!
            \nEle se atingiu!
            \nVida sua: ${vida} Vida Inimigo: ${vidaInimigo}`);
            posicao++;
            escolha = false;
            fim();
        }
    }

    if (posicao == carregador) {
        recarregar();
    }
    atirar.disabled = false;
    arriscar.disabled = false;
};

//Verifica a vida do player e do inimigo
function fim() {
    if (vidaInimigo == 0) {
        console.log(`Inimigo perdeu o jogo..
                    \nVocê ainda esta vivo.`);

                    alert(`Inimigo perdeu o jogo..
                    \nVocê ainda esta vivo.`);
    } else if (vida == 0) {
        console.log(`Inimigo venceu o jogo.
                    \nVocê morreu..`);

                    alert(`Inimigo venceu o jogo.
                    \nVocê morreu..`);
    } else {
        if (escolha == true) {
            acaoDemo();
        }
    };
};

recarregar();