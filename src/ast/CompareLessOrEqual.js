"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de las comparaciones por menor o igual.
*/
class CompareLessOrEqual {
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
    toString() {
        return `CompareLessOrEqual(${this.lhs.toString()}, ${this.rhs.toString()})`;
    }
    unparse() {
        return `(${this.lhs.unparse()} <= ${this.rhs.unparse()})`;
    }
}
exports.CompareLessOrEqual = CompareLessOrEqual;
//# sourceMappingURL=CompareLessOrEqual.js.map