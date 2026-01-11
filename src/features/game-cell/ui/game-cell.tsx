import { clsx } from 'clsx';

import { GameFigure } from '@/entities/game-figure';

import type { Cell } from '../model/cell';

type GameCellProps = {
  cell: Cell;
};

export function GameCell({ cell }: GameCellProps) {
  return (
    <div
      className={clsx(
        'flex aspect-square h-full w-full items-center justify-center p-2',
        {
          'bg-board-white': (cell.x + cell.y) % 2 === 0,
          'bg-board-black': (cell.x + cell.y) % 2 !== 0,
        },
      )}
    >
      {cell.figure && (
        <GameFigure name={cell.figure.name} player={cell.figure.player} />
      )}
    </div>
  );
}
