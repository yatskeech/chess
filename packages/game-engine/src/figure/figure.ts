import type { Player } from '../player/player.ts';
import type { FigureName, FigureRule } from './types.ts';

export class Figure {
  public name: FigureName;
  public player: Player;
  public wasMoved: boolean = false;
  public rules: FigureRule[] = [];

  constructor(name: FigureName, player: Player) {
    this.name = name;
    this.player = player;
  }
}
