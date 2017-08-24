"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de las secuencias de sentencias.
*/
class Sequence {
    constructor(statements) {
        this.statements = statements;
    }
    toString() {
        const statements = this.statements
            .filter((stmt) => (stmt !== undefined))
            .map((stmt) => (stmt.toString()))
            .join(", ");
        return `Sequence(${statements})`;
    }
    unparse() {
        const statements = this.statements
            .filter((stmt) => (stmt !== undefined))
            .map((stmt) => (stmt.unparse()))
            .join(" ");
        return `{ ${statements} }`;
    }
}
exports.Sequence = Sequence;
//# sourceMappingURL=Sequence.js.map