"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de sumas.
*/
class Addition {
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
    toString() {
        return `Addition(${this.lhs.toString()}, ${this.rhs.toString()})`;
    }
    unparse() {
        return `(${this.lhs.unparse()} + ${this.rhs.unparse()})`;
    }
}
exports.Addition = Addition;
//# sourceMappingURL=Addition.js.map