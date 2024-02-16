import { Piece } from "../piece";

export class Rook extends Piece {
    notation: string = "R";
    name: string = "Rook";
    hasUnlimitedRange: boolean = true;
    moves: number[][] = [
        [-1, 0],  // Move left
        [1, 0],   // Move right
        [0, -1],  // Move up
        [0, 1]    // Move down
    ]
}