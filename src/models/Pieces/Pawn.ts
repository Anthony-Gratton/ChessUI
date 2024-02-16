import { Piece } from "../piece";

export class Pawn extends Piece {
    notation: string = "P";
    name: string = "Pawn";
    hasUnlimitedRange: boolean = false;
    moves: number[][];
    public constructor(color: string) {
        super(color)
        if (this.color == "l") {
            this.moves = [[1, 0]]
        }
        else {
            this.moves = [[-1, 0]]
        }
    }
}