"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de conjunciones booleanas (AND).
*/
class Conjunction {
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
    toString() {
        return `Conjunction(${this.lhs.toString()}, ${this.rhs.toString()})`;
    }
    unparse() {
        return `(${this.lhs.unparse()} && ${this.rhs.unparse()})`;
    }
}
exports.Conjunction = Conjunction;
//# sourceMappingURL=Conjunction.js.map