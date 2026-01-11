import type { Figure } from '@/entities/game-figure';

export class Cell {
  public x: number;
  public y: number;
  public figure: Figure | null = null;

  constructor(x: number, y: number, figure: Figure | null = null) {
    this.x = x;
    this.y = y;
    this.figure = figure;
  }
}
