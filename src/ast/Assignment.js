"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de las asignaciones de valores a variables.
*/
class Assignment {
    constructor(id, exp) {
        this.id = id;
        this.exp = exp;
    }
    toString() {
        return `Assignment(${this.id}, ${this.exp.toString()})`;
    }
    unparse() {
        return `${this.id} = ${this.exp.unparse()}`;
    }
}
exports.Assignment = Assignment;
//# sourceMappingURL=Assignment.js.map