import type { Player } from '../player/player.ts';
import { Figure } from './figure.ts';

export class Pawn extends Figure {
  constructor(player: Player) {
    super('pawn', player);
    const movementSign = player.movementSign;
    this.rules = [
      {
        type: 'pawn',
        moves: [
          {
            type: 'forward',
            dx: 0,
            dy: 1 * movementSign,
            isMovePossible: () => true,
          },
          {
            type: 'forward',
            dx: 0,
            dy: 2 * movementSign,
            isMovePossible: () => !this.wasMoved,
          },
          {
            type: 'attack',
            dx: 1,
            dy: 1 * movementSign,
            isMovePossible: () => true,
          },
          {
            type: 'attack',
            dx: -1,
            dy: 1 * movementSign,
            isMovePossible: () => true,
          },
        ],
      },
    ];
  }
}
