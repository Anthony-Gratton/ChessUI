import { Piece } from "../piece";

export class Knight extends Piece {
    notation: string = "N";
    name: string = "Knight";
    hasUnlimitedRange: boolean = false;
    moves: number[][] = [
        [-2, -1], // Up 2, Left 1
        [-2, 1],  // Up 2, Right 1
        [-1, -2], // Up 1, Left 2
        [-1, 2],  // Up 1, Right 2
        [1, -2],  // Down 1, Left 2
        [1, 2],   // Down 1, Right 2
        [2, -1],  // Down 2, Left 1
        [2, 1]    // Down 2, Right 1
    ]
}