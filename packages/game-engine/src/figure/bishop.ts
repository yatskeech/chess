import type { Player } from '../player/player.ts';
import { Figure } from './figure.ts';

export class Bishop extends Figure {
  constructor(player: Player) {
    super('bishop', player);
    this.rules = [{ type: 'ray', directions: ['diagonal'] }];
  }
}
