export type FigureColors = { fill: string; stroke: string };
export type FigureName =
  | 'pawn'
  | 'rook'
  | 'knight'
  | 'bishop'
  | 'queen'
  | 'king';
export type FixedMove = [number, number];
export type RayDirection = 'horizontal' | 'vertical' | 'diagonal';
export type PawnMove = {
  type: 'forward' | 'attack';
  dx: number;
  dy: number;
  isMovePossible: () => boolean;
};
export type KingMove = { type: 'default'; dx: number; dy: number };
export type FigureRule =
  | { type: 'fixed'; moves: FixedMove[] }
  | { type: 'ray'; directions: RayDirection[] }
  | { type: 'pawn'; moves: PawnMove[] }
  | { type: 'king'; moves: KingMove[] };
