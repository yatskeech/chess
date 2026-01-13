import { clsx } from 'clsx';
import { useMemo, useState } from 'react';

import { Cell, GameCell } from '@/entities/cell';
import { Player } from '@/entities/player';

import { Board } from '../model/board';

type GameBoardProps = {
  players: [Player, Player];
  className?: string;
};

export function GameBoard({ players, className }: GameBoardProps) {
  const [board] = useState(new Board(players));
  const [cells, setCells] = useState(board.cells);
  const isChosen = useMemo(() => cells.some((cell) => cell.isChosen), [cells]);

  const handleCellClick = (cell: Cell) => {
    if (isChosen) {
      board.moveTo(cell);
    } else {
      board.moveFrom(cell);
    }

    setCells([...board.cells]);
  };

  return (
    <div
      className={clsx('grid rounded-xl bg-white p-3', className)}
      style={{
        gridTemplateRows: `repeat(${board.size}, auto)`,
        gridTemplateColumns: `repeat(${board.size}, auto)`,
      }}
    >
      {cells.map((cell, index) => (
        <GameCell
          key={index}
          cell={cell}
          onClick={() => handleCellClick(cell)}
        />
      ))}
    </div>
  );
}
