@preprocessor typescript

@{%

import {
  Addition,
  Assignment,
  CompareEqual,
  CompareLessOrEqual,
  CompareGreaterOrEqual,
  CompareNotEqual,
  CompareGreater,
  CompareLess,
  Conjunction,
  IfThenElse,
  IfThen,
  Multiplication,
  Division,
  Negation,
  Numeral,
  Sequence,
  Substraction,
  TruthValue,
  Variable,
  WhileDo
} from '../ast/AST';

import { tokens } from './Tokens';
import { MyLexer } from './Lexer';

const lexer = new MyLexer(tokens);

%}

@lexer lexer

# Statements
stmt ->
    stmtelse {% id %}
    | "if" exp "then" stmtelse "else" stmt    {% ([, cond, , thenBody, , elseBody]) => (new IfThenElse(cond, thenBody,elseBody)) %}

stmtelse ->
     "{" stmt:* "}"                           {% ([, statements, ]) => (new Sequence(statements)) %}
    | "while" exp "do" stmt                   {% ([, cond, , body]) => (new WhileDo(cond, body)) %}
    | identifier "=" exp ";"                  {% ([id, , exp, ]) => (new Assignment(id, exp)) %}
    | "if" exp "then" stmt                    {% ([, cond, , thenBody]) => (new IfThen(cond, thenBody)) %}

exp ->
    conj                   {% id %}

addsub ->
    addsub "+" muldiv       {% ([lhs, , rhs]) => (new Addition(lhs, rhs)) %}
  | addsub "-" muldiv       {% ([lhs, , rhs]) => (new Substraction(lhs, rhs)) %}
  | muldiv                  {% ([exp]) => (exp) %}

muldiv ->
    muldiv "*" value        {% ([lhs, , rhs]) => (new Multiplication(lhs, rhs)) %}
  | muldiv "/" value        {% ([lhs, , rhs]) => (new Division(lhs,rhs)) %}
  | neg                     {% id %}

value ->
    number                  {% ([num]) => (new Numeral(num)) %}
  | "(" exp ")"             {% ([, exp, ]) => (exp) %}
  | identifier              {% ([id]) => (new Variable(id)) %}
  | hex                     {% ([id]) => (new Numeral(id)) %}
  | float                   {% ([id]) => (new Numeral(id)) %}
  | "true"                  {% () => (new TruthValue(true)) %}
  | "false"                 {% () => (new TruthValue(false)) %}

conj ->
    conj "&&" comp          {% ([lhs, , rhs]) => (new Conjunction(lhs, rhs)) %}
  | comp                    {% ([exp]) => (exp) %}

comp ->
    addsub "==" comp          {% ([lhs, , rhs]) => (new CompareEqual(lhs, rhs)) %}
  | addsub "<=" comp          {% ([lhs, , rhs]) => (new CompareLessOrEqual(lhs, rhs)) %}
  | addsub ">=" comp          {% ([lhs, , rhs]) => (new CompareGreaterOrEqual(lhs, rhs)) %}
  | addsub "<" comp           {% ([lhs, , rhs]) => (new CompareLess(lhs, rhs)) %}
  | addsub ">" comp           {% ([lhs, , rhs]) => (new CompareGreater(lhs, rhs)) %}
  | addsub "!=" comp          {% ([lhs, , rhs]) => (new CompareNotEqual(lhs, rhs)) %}
  | addsub                    {% id %}

neg ->
    "!" value              {% ([, exp]) => (new Negation(exp)) %}
  | value                  {% ([exp]) => (exp) %}

# Atoms
identifier -> %identifier   {% ([id]) => (id.value) %}
number -> %number           {% ([num]) => (num.value) %}
hex -> %hex                 {% ([hex])=> (hex.value)%}
float -> %float             {% ([float])=> (float.value)%}
