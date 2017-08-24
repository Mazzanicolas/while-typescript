export const tokens = {

  // Punctuation
  '!':          '!',
  '&&':         '&&',
  '(':          '(',
  ')':          ')',
  '{':          '{',
  '}':          '}',
  '*':          '*',
  '+':          '+',
  '-':          '-',
  ';':          ';',
  '<=':         '<=',
  '==':         '==',
  '=':          '=',
  // Keywords
  'do':         'do',
  'while':      'while',
  'if':         'if',
  'then':       'then',
  'else':       'else',
  'skip':       'skip',
  'true':       'true',
  'false':      'false',
  //_comment: { match:/\/\*(?:[^*]|\*(?:\/))*\*\//,lineBreaks:true},
  // Hex
  hex:       { match: /0[xX][a-fA-F0-9]+/, value: (h: string) => parseInt(h,16) },
  // Atoms
  float:     { match: /[0-9]*\.[0-9]+(?:(?:[eE]?-?[0-9]+))?/, value: (f: string)=> parseFloat(f)},
  number:       { match: /[0-9]+/, value: (x: string) => (parseFloat(x)) },

  // Identifiers
  identifier:   /[a-zA-Z_][a-zA-Z0-9_]*/,
  // Ignored tokens
//_comment:     { match: /\/\*/, lineBreaks: true }
  _comments: { match:/\/\*(?:[^*]|\*(?:\/))*\*\//,lineBreaks:true },
  _ws:          { match: /[ \t\r\n\f\v]+/, lineBreaks: true },
};
