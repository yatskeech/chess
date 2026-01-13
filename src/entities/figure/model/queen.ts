import type { Player } from '@/entities/player';

import { Figure } from './figure';

export class Queen extends Figure {
  constructor(player: Player) {
    super('queen', player);
    this.rules = [
      { type: 'ray', directions: ['horizontal', 'vertical', 'diagonal'] },
    ];
  }
}
