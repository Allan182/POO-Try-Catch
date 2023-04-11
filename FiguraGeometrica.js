export class FiguraGeometrica {
    #tipo;
    #vetPontos;
    #id;

    constructor(tipo, pontos, id) {
        this.#tipo = tipo;
        this.#vetPontos = pontos;
        this.#id = id;
    }

    
    get tipo() {
        return this.#tipo;
    }

    get vetPontos() {
        return this.#vetPontos;
    }

    get id() {
        return this.#id;
    }

}