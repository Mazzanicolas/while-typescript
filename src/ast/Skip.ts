import { Stmt } from './ASTNode';

/**
  Representación de multiplicaciones.
*/
export class Skip implements Stmt {

  constructor() {
  }

  toString(): string {
    return `Skip()`;
  }

  unparse(): string {
    return ``;
  }
}
