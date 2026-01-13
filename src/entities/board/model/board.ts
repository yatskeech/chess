import { Cell } from '@/entities/cell';
import {
  Bishop,
  Figure,
  King,
  Knight,
  Pawn,
  Queen,
  Rook,
} from '@/entities/figure';
import { Player } from '@/entities/player';

export class Board {
  public cells: Cell[] = [];
  public readonly size: number = 8;
  private readonly players: [Player, Player];

  constructor(players: [Player, Player]) {
    this.players = players;
    this.validatePlayers(players);
    this.initBoard();
  }

  private initBoard() {
    this.cells = Array.from({ length: this.size ** 2 }, (_, index) => {
      const x = index % this.size;
      const y = Math.floor(index / this.size);
      const figure = this.getInitialFigure(x, y);
      return new Cell(x, y, figure);
    });
  }

  private resetMoveCellStates() {
    this.cells.forEach((cell) => {
      cell.isChosen = false;
      cell.canMoveHere = false;
    });
  }

  private validatePlayers(players: [Player, Player]) {
    if (players[0].color !== 'white') {
      throw new Error('First player must be white');
    }

    if (players[1].color !== 'black') {
      throw new Error('Second player must be black');
    }
  }

  public moveFrom(cell: Cell) {
    this.resetMoveCellStates();

    if (!cell.figure) return;

    cell.figure.rules.forEach((rule) => {
      this.applyRule(cell, rule);
    });

    cell.isChosen = this.existsAvailableMoves();
  }

  public moveTo(cell: Cell) {
    if (!cell.canMoveHere) return this.resetMoveCellStates();
    const chosenCell = this.cells.find((c) => c.isChosen);
    if (!chosenCell || !chosenCell.figure) return this.resetMoveCellStates();

    chosenCell.figure.wasMoved = true;
    cell.figure = chosenCell.figure;
    chosenCell.figure = null;

    this.resetMoveCellStates();
  }

  private applyRule(cell: Cell, rule: FigureRule) {
    switch (rule.type) {
      case 'fixed':
        return this.applyFixed(cell, rule.moves);
      case 'ray':
        return this.applyRay(cell, rule.directions);
      case 'pawn':
        return this.applyPawn(cell, rule.moves);
      case 'king':
        return this.applyKing(cell, rule.moves);
    }
  }

  private applyFixed(cell: Cell, moves: FixedMove[]) {
    moves.forEach(([dx, dy]) => {
      const x = cell.x + dx;
      const y = cell.y + dy;

      const targetCell = this.findCellAtCoordinates(x, y);
      if (!targetCell || !this.canMoveTo(targetCell)) return;
      targetCell.canMoveHere = !this.isSamePlayer(targetCell, cell);
    });
  }

  private applyRay(cell: Cell, directions: RayDirection[]) {
    const multipliers = [
      { x: 1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1, onlyDiagonal: true },
      { x: -1, y: 1, onlyDiagonal: true },
    ];

    for (const direction of directions) {
      for (const multiplier of multipliers) {
        if (multiplier.onlyDiagonal && direction !== 'diagonal') continue;

        for (let offset = 1; offset < this.size; offset++) {
          let x = cell.x;
          let y = cell.y;

          switch (direction) {
            case 'horizontal':
              x += offset * multiplier.x;
              break;
            case 'vertical':
              y += offset * multiplier.y;
              break;
            case 'diagonal':
              x += offset * multiplier.x;
              y += offset * multiplier.y;
              break;
          }

          const targetCell = this.findCellAtCoordinates(x, y);
          if (!targetCell) continue;
          targetCell.canMoveHere =
            !this.isSamePlayer(targetCell, cell) && this.canMoveTo(targetCell);
          if (targetCell.figure) break;
        }
      }
    }
  }

  private applyPawn(cell: Cell, moves: PawnMove[]) {
    moves.forEach(({ type, dx, dy, isMovePossible }) => {
      if (!isMovePossible()) return;

      const x = cell.x + dx;
      const y = cell.y + dy;

      const targetCell = this.findCellAtCoordinates(x, y);
      if (!targetCell || this.isSamePlayer(targetCell, cell)) return;
      if (!this.canMoveTo(targetCell)) return;

      switch (type) {
        case 'forward': {
          return (targetCell.canMoveHere = !targetCell.figure);
        }
        case 'attack': {
          return (targetCell.canMoveHere = !!targetCell.figure);
        }
      }
    });
  }

  private applyKing(cell: Cell, moves: KingMove[]) {
    moves.forEach(({ type, dx, dy }) => {
      const x = cell.x + dx;
      const y = cell.y + dy;

      const targetCell = this.findCellAtCoordinates(x, y);
      if (!targetCell || this.isSamePlayer(targetCell, cell)) return;
      if (!this.canMoveTo(targetCell)) return;

      switch (type) {
        case 'default': {
          return (targetCell.canMoveHere = true);
        }
      }
    });
  }

  private canMoveTo(cell: Cell) {
    return cell.figure?.name !== 'king';
  }

  private isSamePlayer(cellA: Cell, cellB: Cell): boolean {
    return cellA.figure?.player === cellB.figure?.player;
  }

  private findCellAtCoordinates(x: number, y: number) {
    return this.cells.find((c) => c.x === x && c.y === y);
  }

  private existsAvailableMoves(): boolean {
    return this.cells.some((cell) => cell.canMoveHere);
  }

  private getInitialFigure(x: number, y: number): Figure | null {
    const isFirstPlayer = y >= this.size / 2;
    const player = isFirstPlayer ? this.players[0] : this.players[1];

    if (y === 1 || y === 6) return new Pawn(player);
    if (y !== 0 && y !== 7) return null;

    if (x === 0 || x === 7) return new Rook(player);
    if (x === 1 || x === 6) return new Knight(player);
    if (x === 2 || x === 5) return new Bishop(player);
    if (x === 3) return new Queen(player);
    if (x === 4) return new King(player);

    return null;
  }
}
