"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de las sentencias condicionales.
*/
class IfThenElse {
    constructor(cond, thenBody, elseBody) {
        this.cond = cond;
        this.thenBody = thenBody;
        this.elseBody = elseBody;
    }
    toString() {
        return `IfThenElse(${this.cond.toString()}, ${this.thenBody.toString()}, ${this.elseBody.toString()})`;
    }
    unparse() {
        return `if ${this.cond.unparse()} then { ${this.thenBody.unparse()} } else { ${this.elseBody.unparse()} }`;
    }
}
exports.IfThenElse = IfThenElse;
//# sourceMappingURL=IfThenElse.js.map