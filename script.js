import { FiguraGeometrica } from "./FiguraGeometrica.js";
import { NumberIsInteger, MedidasInvalidas, InvalidNumberPoints } from "./Error.js";
import { Ponto } from "./Ponto.js"

let vetPontos = [];     // Vetor com todos os pontos;
let vetPonto = [];      // Vet com o ponto especifico inserido na tela do usuario;
let figurasGeometricas = [];    // Vet com todas os objetos instanciados da classe figurasGeometricas;

const select = document.getElementById("select");     // resgate select;
const pontoX = document.getElementById("pontoX");     // resgate input sobre o ponto X;
const pontoY = document.getElementById("pontoY");     // resgate input sobre o ponto y;
const textInput = document.getElementById("textInput");   // resgate input sobre o ponto o identificador;
const btSalvarFigura = document.getElementById("bt-salvar-figura"); // resgate button sobre Salvar Figura;
const btSalvarPontos = document.getElementById("bt-cadastro-pontos"); // resgate button sobre Salvar Pontos;


let id = 0;     // ID dinâmico iniciado em 0
obtemID();  // Chama a função para começar o ID em 1
let error = "";


function adicionaPonto(x, y) {

    if (Number.isInteger(x) && Number.isInteger(y)) {
        vetPonto = new Ponto(x, y);
        vetPontos.push(vetPonto);
        return vetPontos;
    } else {
        throw new NumberIsInteger();
    }
}
btSalvarPontos.addEventListener("click", () => {

    var x = Number(pontoX.value);
    var y = Number(pontoY.value);

    try {
        error = adicionaPonto(x, y);
    } catch (e) {
        error = e;
    }
    finally {
        console.log(error);
    }
});



function salvarFigura() {

    let selectedOption = select.options[select.selectedIndex];  // resgata opção marcada no select;
    let selectedValue = selectedOption.value; // pega o conteudo da opção marcada no select;
    let tipo = "";

    if (selectedValue == "triangulo") {
        tipo = "triangulo";
    } else if (selectedValue == "retangulo") {
        tipo = "retangulo"
    } else {
        tipo = "estrela";
    }


    var figuraGeo = new FiguraGeometrica(tipo, vetPontos, id);
    figurasGeometricas.push(figuraGeo); 


    obtemID();      // Atualiza ID;
    vetPontos = []; // Limpa Vetor de Pontos;
    console.log(figuraGeo);
}
btSalvarFigura.addEventListener("click", () => {

    try {
        salvarFigura();
        //   i = verificaPonto();
        //  i = verificaFigura();

    } catch (e) {
        error = e;
    }
    finally {
        console.log(error);
    }

});



function obtemID() {
    textInput.value = ++id;
};


function verificaPonto() {

    if (vetPontos.length >= 2 && vetPontos[0].pontoX == vetPontos[vetPontos.length - 1].pontoX && vetPontos[0].pontoY == vetPontos[vetPontos.length - 1].pontoY)
        return true;
    else {
        throw new MedidasInvalidas();
    }
}


function verificaFigura() {

    if (selectedValue == "triangulo" && vetPontos.length == 4) {
        return true;
    } else if (selectedValue == "retangulo" && vetPontos.length == 5) {
        return true;
    } else if (selectedValue == "estrela" && vetPontos.length == 6) {
        return true;
    } else {
        throw new InvalidNumberPoints();
    }

}