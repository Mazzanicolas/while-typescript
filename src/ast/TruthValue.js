"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  Representación de valores de verdad (cierto o falso).
*/
class TruthValue {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return `TruthValue(${this.value})`;
    }
    unparse() {
        return this.value ? "true" : "false";
    }
}
exports.TruthValue = TruthValue;
//# sourceMappingURL=TruthValue.js.map