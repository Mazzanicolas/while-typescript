"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const nearley_1 = require("nearley");
const Tokens_1 = require("./parser/Tokens");
const Lexer_1 = require("./parser/Lexer");
const Grammar_1 = require("./parser/Grammar");
console.log("While :: REPL");
while (true) {
    const lexer = new Lexer_1.MyLexer(Tokens_1.tokens);
    const parser = new nearley_1.Parser(Grammar_1.ParserRules, Grammar_1.ParserStart, { lexer });
    const input = readlineSync.question('>>> ');
    try {
        parser.feed(input);
        // Print result
        const node = parser.results[0];
        console.log(node.toString()); //.toString()
    }
    catch (parseError) {
        console.log(parseError);
    }
}
//# sourceMappingURL=main.js.map