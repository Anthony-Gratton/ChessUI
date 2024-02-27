import { Piece } from "./piece";


export class Board {

    id: number
    turn: number = 1
    pieces: Piece[][]

    public constructor(id: number, turn: number, pieces: Piece[][]) {
        this.id = id;
        this.turn = turn;
        this.pieces = pieces;
    }

    NextTurn() {
        this.turn++;
    }

}