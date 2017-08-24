"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
function id(d) { return d[0]; }
const AST_1 = require("../ast/AST");
const Tokens_1 = require("./Tokens");
const Lexer_1 = require("./Lexer");
const lexer = new Lexer_1.MyLexer(Tokens_1.tokens);
;
;
;
exports.Lexer = lexer;
exports.ParserRules = [
    { "name": "stmt", "symbols": ["identifier", { "literal": "=" }, "aexp", { "literal": ";" }], "postprocess": ([id, , exp,]) => (new AST_1.Assignment(id, exp)) },
    { "name": "stmt", "symbols": [{ "literal": "skip" }, { "literal": ";" }], "postprocess": () => (new AST_1.Skip()) },
    { "name": "stmt$ebnf$1", "symbols": [] },
    { "name": "stmt$ebnf$1", "symbols": ["stmt$ebnf$1", "stmt"], "postprocess": (d) => d[0].concat([d[1]]) },
    { "name": "stmt", "symbols": [{ "literal": "{" }, "stmt$ebnf$1", { "literal": "}" }], "postprocess": ([, statements,]) => (new AST_1.Sequence(statements)) },
    { "name": "stmt", "symbols": [{ "literal": "while" }, "bexp", { "literal": "do" }, "stmt"], "postprocess": ([, cond, , body]) => (new AST_1.WhileDo(cond, body)) },
    { "name": "stmt", "symbols": [{ "literal": "if" }, "bexp", { "literal": "then" }, "stmt", { "literal": "else" }, "stmt"], "postprocess": ([, cond, , thenBody, , elseBody]) => (new AST_1.IfThenElse(cond, thenBody, elseBody)) },
    { "name": "aexp", "symbols": ["addsub"], "postprocess": ([exp]) => (exp) },
    { "name": "addsub", "symbols": ["addsub", { "literal": "+" }, "muldiv"], "postprocess": ([lhs, , rhs]) => (new AST_1.Addition(lhs, rhs)) },
    { "name": "addsub", "symbols": ["addsub", { "literal": "-" }, "muldiv"], "postprocess": ([lhs, , rhs]) => (new AST_1.Substraction(lhs, rhs)) },
    { "name": "addsub", "symbols": ["muldiv"], "postprocess": ([exp]) => (exp) },
    { "name": "muldiv", "symbols": ["muldiv", { "literal": "*" }, "aexp"], "postprocess": ([lhs, , rhs]) => (new AST_1.Multiplication(lhs, rhs)) },
    { "name": "muldiv", "symbols": ["muldiv", { "literal": "/" }, "aexp"], "postprocess": ([lhs, , rhs]) => (new AST_1.Division(lhs, rhs)) },
    { "name": "muldiv", "symbols": ["avalue"], "postprocess": ([exp]) => (exp) },
    { "name": "avalue", "symbols": [{ "literal": "(" }, "aexp", { "literal": ")" }], "postprocess": ([, aexp,]) => (aexp) },
    { "name": "avalue", "symbols": ["number"], "postprocess": ([num]) => (new AST_1.Numeral(num)) },
    { "name": "avalue", "symbols": ["identifier"], "postprocess": ([id]) => (new AST_1.Variable(id)) },
    { "name": "avalue", "symbols": ["hex"], "postprocess": ([id]) => (new AST_1.Numeral(id)) },
    { "name": "avalue", "symbols": ["float"], "postprocess": ([id]) => (new AST_1.Numeral(id)) },
    { "name": "bexp", "symbols": ["conj"], "postprocess": ([exp]) => (exp) },
    { "name": "conj", "symbols": ["conj", { "literal": "&&" }, "comp"], "postprocess": ([lhs, , rhs]) => (new AST_1.Conjunction(lhs, rhs)) },
    { "name": "conj", "symbols": ["comp"], "postprocess": ([exp]) => (exp) },
    { "name": "comp", "symbols": ["aexp", { "literal": "==" }, "aexp"], "postprocess": ([lhs, , rhs]) => (new AST_1.CompareEqual(lhs, rhs)) },
    { "name": "comp", "symbols": ["aexp", { "literal": "<=" }, "aexp"], "postprocess": ([lhs, , rhs]) => (new AST_1.CompareLessOrEqual(lhs, rhs)) },
    { "name": "comp", "symbols": ["neg"] },
    { "name": "neg", "symbols": [{ "literal": "!" }, "bvalue"], "postprocess": ([, exp]) => (new AST_1.Negation(exp)) },
    { "name": "neg", "symbols": ["bvalue"], "postprocess": ([exp]) => (exp) },
    { "name": "bvalue", "symbols": [{ "literal": "(" }, "bexp", { "literal": ")" }], "postprocess": ([, exp,]) => (exp) },
    { "name": "bvalue", "symbols": [{ "literal": "true" }], "postprocess": () => (new AST_1.TruthValue(true)) },
    { "name": "bvalue", "symbols": [{ "literal": "false" }], "postprocess": () => (new AST_1.TruthValue(false)) },
    { "name": "bvalue", "symbols": ["identifier"], "postprocess": ([id]) => (new AST_1.Variable(id)) },
    { "name": "identifier", "symbols": [(lexer.has("identifier") ? { type: "identifier" } : identifier)], "postprocess": ([id]) => (id.value) },
    { "name": "number", "symbols": [(lexer.has("number") ? { type: "number" } : number)], "postprocess": ([num]) => (num.value) },
    { "name": "hex", "symbols": [(lexer.has("hex") ? { type: "hex" } : hex)], "postprocess": ([hex]) => (hex.value) },
    { "name": "float", "symbols": [(lexer.has("float") ? { type: "float" } : float)], "postprocess": ([float]) => (float.value) }
];
exports.ParserStart = "stmt";
//# sourceMappingURL=Grammar.js.map