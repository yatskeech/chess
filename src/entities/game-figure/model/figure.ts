export class Figure {
  public name: FigureName;
  public player: PlayerColors;

  constructor(name: FigureName, player: PlayerColors) {
    this.name = name;
    this.player = player;
  }
}
