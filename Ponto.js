export class Ponto {
    #pontoX;
    #pontoY;

    constructor(x, y) {
        this.#pontoX = x;
        this.#pontoY = y;
    }
    get pontoX() {
        return this.#pontoX;
    }

    get pontoY() {
        return this.#pontoY;
    }

    set pontoX(newPontoX) {
        this.#pontoX = newPontoX;
    }

    set pontoY(newPontoY) {
        this.#pontoY = newPontoY;
    }

}


