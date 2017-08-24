"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de las iteraciones while-do.
*/
class WhileDo {
    constructor(cond, body) {
        this.cond = cond;
        this.body = body;
    }
    toString() {
        return `WhileDo(${this.cond.toString()}, ${this.body.toString()})`;
    }
    unparse() {
        console.log(this.cond);
        return `while ${this.cond.unparse()} do { ${this.body.unparse()} }`;
    }
}
exports.WhileDo = WhileDo;
//# sourceMappingURL=WhileDo.js.map