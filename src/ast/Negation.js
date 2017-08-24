"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de las negaciones de expresiones booleanas.
*/
class Negation {
    constructor(exp) {
        this.exp = exp;
    }
    toString() {
        return `Negation(${this.exp.toString()})`;
    }
    unparse() {
        return `(!${this.exp.unparse()})`;
    }
}
exports.Negation = Negation;
//# sourceMappingURL=Negation.js.map