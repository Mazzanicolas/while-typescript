"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de usos de variable en expresiones.
*/
class Variable {
    constructor(id) {
        this.id = id;
    }
    toString() {
        return `Variable(${this.id})`;
    }
    unparse() {
        return this.id;
    }
}
exports.Variable = Variable;
//# sourceMappingURL=Variable.js.map