"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = {
    // Punctuation
    '!': '!',
    '&&': '&&',
    '(': '(',
    ')': ')',
    '{': '{',
    '}': '}',
    '*': '*',
    '+': '+',
    '-': '-',
    ';': ';',
    '<=': '<=',
    '==': '==',
    '=': '=',
    '/': '/',
    // Keywords
    'do': 'do',
    'while': 'while',
    'if': 'if',
    'then': 'then',
    'else': 'else',
    'skip': 'skip',
    'true': 'true',
    'false': 'false',
    //omment: { match:/\/\*(?:[^*]|\*(?:\/))*\*\//,lineBreaks:true},
    // Hex
    hex: { match: /0[xX][a-fA-F0-9]+/, value: (h) => parseInt(h, 16) },
    // Atoms
    float: { match: /[0-9]*\.[0-9]+(?:(?:[eE]?-?[0-9]+))?/, value: (f) => parseFloat(f) },
    number: { match: /[0-9]+/, value: (x) => (parseFloat(x)) },
    // Identifiers
    identifier: /[a-zA-Z_][a-zA-Z0-9_]*/,
    // Ignored tokens
    _comment: { match: /alla/, lineBreaks: true },
    _ws: { match: /[ \t\r\n\f\v]+/, lineBreaks: true },
};
//# sourceMappingURL=Tokens.js.map