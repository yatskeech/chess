import type { Player } from '../player/player.ts';
import { Figure } from './figure.ts';

export class Rook extends Figure {
  constructor(player: Player) {
    super('rook', player);
    this.rules = [{ type: 'ray', directions: ['horizontal', 'vertical'] }];
  }
}
