"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moo_1 = require("moo");
/*
  Lexer is tokenizer that implements the interface accepted by nearley
  and wraps a moo tokenizer to ignore tokens whose type starts
  with an underscore.
*/
class MyLexer {
    constructor(tokens) {
        this.wrapped = moo_1.compile(tokens);
    }
    formatError(token, message) {
        return this.wrapped.formatError(token, message);
    }
    has(tokenType) {
        return this.wrapped.has(tokenType);
    }
    next() {
        var token = this.wrapped.next();
        while (token != undefined && token.type.length > 0 && token.type[0] == "_") {
            token = this.wrapped.next();
        }
        return token;
    }
    reset(chunk, info) {
        this.wrapped.reset(chunk, info);
    }
    save() {
        return this.wrapped.save();
    }
}
exports.MyLexer = MyLexer;
//# sourceMappingURL=Lexer.js.map