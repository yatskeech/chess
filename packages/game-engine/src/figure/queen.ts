import type { Player } from '../player/player.ts';
import { Figure } from './figure.ts';

export class Queen extends Figure {
  constructor(player: Player) {
    super('queen', player);
    this.rules = [
      { type: 'ray', directions: ['horizontal', 'vertical', 'diagonal'] },
    ];
  }
}
