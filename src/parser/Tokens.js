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
    // Atoms
    number: { match: /[0-9]+/, value: (x) => (parseFloat(x)) },
    // Identifiers
    identifier: /[a-zA-Z_$][a-zA-Z0-9_$]*/,
    // Ignored tokens
    _ws: { match: /[ \t\r\n\f\v]+/, lineBreaks: true },
};
//# sourceMappingURL=Tokens.js.map