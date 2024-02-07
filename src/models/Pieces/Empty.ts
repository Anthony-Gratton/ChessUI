import { Piece } from "../piece";

export class Empty extends Piece {
    notation: string = "";
    name: string = "Empty";
    override color: string = "";
}