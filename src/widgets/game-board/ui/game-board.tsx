import { Bishop, King, Knight, Pawn, Queen, Rook } from '@/entities/figures';

export function GameBoard() {
  const colors = { fill: '#34364C', stroke: '#F4F7FA' };

  return (
    <div className="flex gap-2">
      <Pawn colors={colors} />
      <Bishop colors={colors} />
      <Knight colors={colors} />
      <King colors={colors} />
      <Queen colors={colors} />
      <Rook colors={colors} />
    </div>
  );
}
