import { Piece } from "./piece";


export interface Board {

    id: number,
    turn: number,
    pieces: Piece[][],

}