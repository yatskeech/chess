import { Player, PlayerColors } from '@repo/game-engine';
import { useState } from 'react';

import { GameBoard } from '@/entities/board';

export function IndexPage() {
  const [players] = useState<[Player, Player]>([
    new Player(PlayerColors.White),
    new Player(PlayerColors.Black),
  ]);

  return (
    <div className="flex h-full flex-col items-center">
      <div>Player 1</div>
      <GameBoard players={players} className="flex-1" />
      <div>Player 2</div>
    </div>
  );
}
