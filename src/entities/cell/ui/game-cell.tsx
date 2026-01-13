import { clsx } from 'clsx';

import { GameFigure } from '@/entities/figure';

import type { Cell } from '../model/cell';

type GameCellProps = {
  cell: Cell;
  onClick?: () => void;
};

export function GameCell({ cell, onClick }: GameCellProps) {
  return (
    <div
      className={clsx(
        'relative flex aspect-square h-full w-full items-center justify-center p-[10%]',
        {
          'bg-board-white': (cell.x + cell.y) % 2 === 0,
          'bg-board-black': (cell.x + cell.y) % 2 !== 0,
        },
      )}
      onClick={onClick}
    >
      {cell.canMoveHere && (
        <div
          className={clsx('bg-board-active/50 absolute', {
            'inset-0': cell.figure,
            'top-1/2 left-1/2 aspect-square w-1/3 -translate-1/2 rounded-full':
              !cell.figure,
          })}
        />
      )}
      {cell.figure && (
        <div className="z-10 h-full w-full">
          <GameFigure
            name={cell.figure.name}
            playerColor={cell.figure.player.color}
          />
        </div>
      )}
    </div>
  );
}
