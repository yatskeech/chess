import type { Figure } from '../figure/figure.ts';

export class Cell {
  public x: number;
  public y: number;
  public isChosen: boolean = false;
  public canMoveHere: boolean = false;
  public figure: Figure | null = null;

  constructor(x: number, y: number, figure: Figure | null = null) {
    this.x = x;
    this.y = y;
    this.figure = figure;
  }
}
