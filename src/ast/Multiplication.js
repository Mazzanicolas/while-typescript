"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de multiplicaciones.
*/
class Multiplication {
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
    toString() {
        return `Multiplication(${this.lhs.toString()}, ${this.rhs.toString()})`;
    }
    unparse() {
        return `(${this.lhs.unparse()} * ${this.rhs.unparse()})`;
    }
}
exports.Multiplication = Multiplication;
//# sourceMappingURL=Multiplication.js.map