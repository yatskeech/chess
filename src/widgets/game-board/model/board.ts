import { Figure } from '@/entities/game-figure';
import { Cell } from '@/features/game-cell';

export class Board {
  public cells: Cell[] = [];
  readonly size: number = 8;

  constructor() {
    this.initBoard();
  }

  private initBoard() {
    this.cells = Array.from({ length: this.size ** 2 }, (_, index) => {
      const x = index % this.size;
      const y = Math.floor(index / this.size);
      const figure = this.getInitialFigure(x, y);
      return new Cell(x, y, figure);
    });
  }

  private getInitialFigure(x: number, y: number): Figure | null {
    const color: PlayerColors = y < this.size / 2 ? 'black' : 'white';

    if (y === 1 || y === 6) return new Figure('pawn', color);
    if (y !== 0 && y !== 7) return null;

    if (x === 0 || x === 7) return new Figure('rook', color);
    if (x === 1 || x === 6) return new Figure('knight', color);
    if (x === 2 || x === 5) return new Figure('bishop', color);
    if (x === 3) return new Figure('queen', color);
    if (x === 4) return new Figure('king', color);

    return null;
  }
}
