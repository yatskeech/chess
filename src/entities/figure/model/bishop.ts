import type { Player } from '@/entities/player';

import { Figure } from './figure';

export class Bishop extends Figure {
  constructor(player: Player) {
    super('bishop', player);
    this.rules = [{ type: 'ray', directions: ['diagonal'] }];
  }
}
