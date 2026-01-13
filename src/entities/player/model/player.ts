export class Player {
  public color: PlayerColors;
  public movementSign: 1 | -1;

  constructor(color: PlayerColors) {
    this.color = color;
    this.movementSign = color === 'white' ? -1 : 1;
  }
}
