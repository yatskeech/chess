import type { Figure } from '@/entities/figure';

export class Cell {
  public x: number;
  public y: number;
  public isChosen: boolean = false;
  private _canMoveHere: boolean = false;
  public figure: Figure | null = null;

  constructor(x: number, y: number, figure: Figure | null = null) {
    this.x = x;
    this.y = y;
    this.figure = figure;
  }

  public get canMoveHere(): boolean {
    return this._canMoveHere;
  }

  public set canMoveHere(value: boolean) {
    if (this.figure?.name === 'king') return;
    this._canMoveHere = value;
  }
}
