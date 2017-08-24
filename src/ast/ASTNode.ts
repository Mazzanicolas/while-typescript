export interface ASTNode {
  toString(): string;
  unparse(): string;
}

export interface Exp extends ASTNode { }

/**
  Categoría sintáctica de las sentencias (statements) de While, las
  construcciones del lenguaje que modifican (potencialmente) los
  valores de las variables en el estado del programa.
*/
export interface Stmt extends ASTNode { }
