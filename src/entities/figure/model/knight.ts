import type { Player } from '@/entities/player';

import { Figure } from './figure';

export class Knight extends Figure {
  constructor(player: Player) {
    super('knight', player);
    this.rules = [
      {
        type: 'fixed',
        moves: [
          [1, 2],
          [2, 1],
          [-1, 2],
          [-2, 1],
          [1, -2],
          [2, -1],
          [-1, -2],
          [-2, -1],
        ],
      },
    ];
  }
}
