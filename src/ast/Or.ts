import { Exp } from './ASTNode';

/**
  Representación de conjunciones booleanas (AND).
*/
export class Or implements Exp {

  lhs:Exp;
  rhs:Exp;

  constructor(lhs:Exp, rhs:Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `Conjunction(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} || ${this.rhs.unparse()})`;
  }
}
