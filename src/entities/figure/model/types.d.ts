type FigureColors = { fill: string; stroke: string };
type FigureName = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
type FixedMove = [number, number];
type RayDirection = 'horizontal' | 'vertical' | 'diagonal';
type PawnMove = {
  type: 'forward' | 'attack';
  dx: number;
  dy: number;
  isMovePossible: () => boolean;
};
type KingMove = { type: 'default'; dx: number; dy: number };
type FigureRule =
  | { type: 'fixed'; moves: FixedMove[] }
  | { type: 'ray'; directions: RayDirection[] }
  | { type: 'pawn'; moves: PawnMove[] }
  | { type: 'king'; moves: KingMove[] };
