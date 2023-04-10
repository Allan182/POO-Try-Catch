export class NumberIsInteger extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! Number is not Integer.";
    }
}

export class NickRepeatError extends Error {
    constructor(message) {
        super(message);
        this.name = "NickRepeatError !!!";
    }
}

export class MedidasInvalidas extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! O Último ponto não coincide com o primeiro !!!";
    }
}

export class InvalidNumberPoints extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! O número de pontos não coincide com o tamanho da Figura !!!";
    }
}