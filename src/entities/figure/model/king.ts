import type { Player } from '@/entities/player';

import { Figure } from './figure';

export class King extends Figure {
  constructor(player: Player) {
    super('king', player);
    this.rules = [
      {
        type: 'king',
        moves: [
          { type: 'default', dx: 0, dy: 1 },
          { type: 'default', dx: 1, dy: 0 },
          { type: 'default', dx: 0, dy: -1 },
          { type: 'default', dx: -1, dy: 0 },
          { type: 'default', dx: 1, dy: 1 },
          { type: 'default', dx: 1, dy: -1 },
          { type: 'default', dx: -1, dy: 1 },
          { type: 'default', dx: -1, dy: -1 },
        ],
      },
    ];
  }
}
