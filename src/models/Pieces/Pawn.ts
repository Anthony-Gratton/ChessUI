import { Piece } from "../piece";

export class Pawn extends Piece {
    notation: string = "P";
    name: string = "Pawn";
    hasUnlimitedRange: boolean = false;
    moves: number[][];
    takeMoves: number[][];
    hasMovedAt: number = -99;
    enPassantEnabled: boolean = false;
    public constructor(color: string) {
        super(color)
        if (this.color == "l") {
            this.moves = [[-1, 0]]
            this.takeMoves = [[-1, -1], [-1, 1]]
        }
        else {
            this.moves = [[1, 0]]
            this.takeMoves = [[1, -1], [1, 1]]

        }
    }
}