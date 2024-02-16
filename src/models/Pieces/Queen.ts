import { Piece } from "../piece";

export class Queen extends Piece {
    notation: string = "Q";
    name: string = "Queen";
    hasUnlimitedRange: boolean = true;
    moves: number[][] = [
        [-1, 0],  // Move left (rook-like)
        [1, 0],   // Move right (rook-like)
        [0, -1],  // Move up (rook-like)
        [0, 1],   // Move down (rook-like)
        [-1, -1], // Move diagonally up-left (bishop-like)
        [-1, 1],  // Move diagonally up-right (bishop-like)
        [1, -1],  // Move diagonally down-left (bishop-like)
        [1, 1]    // Move diagonally down-right (bishop-like)
    ]
}