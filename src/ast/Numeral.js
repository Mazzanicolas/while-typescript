"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de constantes numéricas o numerales.
*/
class Numeral {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return `Numeral(${this.value})`;
    }
    unparse() {
        return `${this.value}`;
    }
}
exports.Numeral = Numeral;
//# sourceMappingURL=Numeral.js.map