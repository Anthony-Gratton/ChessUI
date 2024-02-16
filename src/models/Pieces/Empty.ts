import { Piece } from "../piece";

export class Empty extends Piece {
    notation: string = "";
    name: string = "Empty";
    moves: number[][] = []
    hasUnlimitedRange: boolean = false;

    constructor() {
        super(""); // Call the superclass constructor with an empty string
    }
}