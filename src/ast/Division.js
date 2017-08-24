"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de multiplicaciones.
*/
class Division {
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
    toString() {
        return `Division(${this.lhs.toString()}, ${this.rhs.toString()})`;
    }
    unparse() {
        return `(${this.lhs.unparse()} / ${this.rhs.unparse()})`;
    }
}
exports.Division = Division;
//# sourceMappingURL=Division.js.map