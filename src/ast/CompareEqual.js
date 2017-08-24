"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de las comparaciones por igual.
*/
class CompareEqual {
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
    toString() {
        return `CompareEqual(${this.lhs.toString()}, ${this.rhs.toString()})`;
    }
    unparse() {
        return `(${this.lhs.unparse()} == ${this.rhs.unparse()})`;
    }
}
exports.CompareEqual = CompareEqual;
//# sourceMappingURL=CompareEqual.js.map