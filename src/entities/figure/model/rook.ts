import type { Player } from '@/entities/player';

import { Figure } from './figure';

export class Rook extends Figure {
  constructor(player: Player) {
    super('rook', player);
    this.rules = [{ type: 'ray', directions: ['horizontal', 'vertical'] }];
  }
}
