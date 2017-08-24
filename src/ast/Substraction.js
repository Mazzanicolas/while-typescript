"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de restas.
*/
class Substraction {
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
    toString() {
        return `Substraction(${this.lhs.toString()}, ${this.rhs.toString()})`;
    }
    unparse() {
        return `(${this.lhs.unparse()} - ${this.rhs.unparse()})`;
    }
}
exports.Substraction = Substraction;
//# sourceMappingURL=Substraction.js.map