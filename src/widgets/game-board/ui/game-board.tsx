import { clsx } from 'clsx';
import { useState } from 'react';

import { GameCell } from '@/features/game-cell';

import { Board } from '../model/board';

type GameBoardProps = {
  className?: string;
};

export function GameBoard({ className }: GameBoardProps) {
  const [board] = useState(new Board());

  return (
    <div
      className={clsx('grid rounded-xl bg-white p-3', className)}
      style={{
        gridTemplateRows: `repeat(${board.size}, auto)`,
        gridTemplateColumns: `repeat(${board.size}, auto)`,
      }}
    >
      {board.cells.map((cell, index) => (
        <GameCell key={index} cell={cell} />
      ))}
    </div>
  );
}
