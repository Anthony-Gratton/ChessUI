import { Piece } from "../piece";

export class Bishop extends Piece {
    notation: string = "B";
    name: string = "Bishop";
    hasUnlimitedRange: boolean = true;
    moves: number[][] = [
        [-1, -1], // Move diagonally up-left
        [-1, 1],  // Move diagonally up-right
        [1, -1],  // Move diagonally down-left
        [1, 1]    // Move diagonally down-right
    ]
}