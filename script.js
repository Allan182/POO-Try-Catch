import { FiguraGeometrica } from "./FiguraGeometrica.js";
import { NumberIsInteger, MedidasInvalidas, InvalidNumberPoints } from "./Error.js";
import { Ponto } from "./Ponto.js"

let vetPontos = [];   // Vetor com todos os pontos;
let figurasGeometricas = []; // Vetor com Todas as Figuras;


const select = document.getElementById("select");     // resgate select;
let pontoX = document.getElementById("pontoX");     // resgate input sobre o ponto X;
let pontoY = document.getElementById("pontoY");     // resgate input sobre o ponto y;
const textInput = document.getElementById("textInput");   // resgate input sobre o ponto o identificador;
const btSalvarFigura = document.getElementById("bt-salvar-figura"); // resgate button sobre Salvar Figura;
const btSalvarPontos = document.getElementById("bt-cadastro-pontos"); // resgate button sobre Salvar Pontos;

let id = 0;     // ID dinâmico iniciado em 0
obtemID();  // Chama a função para incrementar o ID e começar em 1;




function adicionaPonto(x, y) {

    if (Number.isInteger(x) && Number.isInteger(y)) {
        let novoPonto = new Ponto(x, y);
        vetPontos.push(novoPonto);
        return vetPontos;
    } else {
        throw new NumberIsInteger();
    }
}
btSalvarPontos.addEventListener("click", () => {

    let x = Number(pontoX.value);
    let y = Number(pontoY.value);

    let error;
    try {
        error = adicionaPonto(x, y);
    } catch (e) {
        error = e;
    }
    finally {
        console.log(error);
    }
});

function limpaPontos() {
    vetPontos = [];
}

function salvarFigura(tipo) {

    if (vetPontos.length >= 4) {

        let figuraGeo = new FiguraGeometrica(tipo, vetPontos, id);
        figurasGeometricas.push(figuraGeo);

        if (verificaFiguraFechada(figuraGeo) == true) { // Só apresenta a figura no console caso a figura seja fechada. Não apresentando informações desnecessárias, como uma figura invalida.
            console.log(figurasGeometricas);
        }
        obtemID();      // Atualiza ID;
        limpaPontos(); // Limpa Vetor de Pontos;
        
        return figuraGeo;
    } else {
        limpaPontos(); // Limpa Vetor de Pontos;
        throw new InvalidNumberPoints();
    }
}
btSalvarFigura.addEventListener("click", () => {
    let error;
    try {
        let tipoFigura = obterTipo(); // Obtem o tipo, seja triangulo estrela ou retangulo para ser usado como parametro
        let figuraGeo = salvarFigura(tipoFigura);   // armazena a figuraGeometrica Salva.
        verificaFiguraFechada(figuraGeo);       // Verifica se a figura geometrica Salva
        verificaTipoFigura(figuraGeo, tipoFigura);

    } catch (e) {
        error = e;
        console.log(error);
    }


});


function verificaFiguraFechada(figura) {

    let pontoInicial = figura.vetPontos[0];
    let pontoFinal = figura.vetPontos[figura.vetPontos.length - 1];

    if (pontoInicial.pontoX == pontoFinal.pontoX && pontoInicial.pontoY == pontoFinal.pontoY)
        return true;
    else {
        throw new MedidasInvalidas();
    }
}

function verificaTipoFigura(figura, tipoFigura) {

    let vetPontos = figura.vetPontos;

    if (tipoFigura == "triangulo" && vetPontos.length == 4) {
        return true;
    } else if (tipoFigura == "retangulo" && vetPontos.length == 5) {
        return true;
    } else if (tipoFigura == "estrela" && vetPontos.length == 6) {
        return true;
    } else {
        throw new InvalidNumberPoints();
    }
}

function obterTipo() {
    let selectedOption = select.options[select.selectedIndex];  // resgata opção marcada no select;
    let selectedValue = selectedOption.value; // pega o conteudo da opção marcada no select;
    return selectedValue;   // retorna o valor do select.
}

function obtemID() {
    textInput.value = ++id;
};