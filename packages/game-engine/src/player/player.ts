import { PlayerColors } from './types.ts';

const MOVEMENT_SIGN_MAP: Record<PlayerColors, number> = {
  [PlayerColors.White]: -1,
  [PlayerColors.Black]: 1,
};

export class Player {
  public color: PlayerColors;
  public movementSign: number;

  constructor(color: PlayerColors) {
    this.color = color;
    this.movementSign = MOVEMENT_SIGN_MAP[color];
  }
}
