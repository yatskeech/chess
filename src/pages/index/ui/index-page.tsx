import { GameBoard } from '@/widgets/game-board';

export function IndexPage() {
  return (
    <div className="flex h-full flex-col items-center">
      <div>Player 1</div>
      <GameBoard className="flex-1" />
      <div>Player 2</div>
    </div>
  );
}
