import { Piece } from "../piece";

export class Pawn extends Piece {
    notation: string = "P";
    name: string = "Pawn";
    moves: number[];
    public constructor(color: string) {
        super(color)
        if (this.color == "W") {
            this.moves = [8]
        }
        else {
            this.moves = [-8]
        }
        [[0][1], [1][1]]
    }
}