import { Piece } from "../piece";

export class King extends Piece {
    notation: string = "K";
    name: string = "King";
    hasUnlimitedRange: boolean = false;
    moves: number[][] = [
        [-1, -1], // Diagonal: Up Left
        [-1, 0],  // Vertical: Up
        [-1, 1],  // Diagonal: Up Right
        [0, -1],  // Horizontal: Left
        [0, 1],   // Horizontal: Right
        [1, -1],  // Diagonal: Down Left
        [1, 0],   // Vertical: Down
        [1, 1]    // Diagonal: Down Right
    ]
}