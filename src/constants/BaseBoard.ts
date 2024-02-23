import { Bishop } from "@/models/Pieces/Bishop";
import { Knight } from "@/models/Pieces/Knight";
import { Rook } from "@/models/Pieces/Rook";
import { Queen } from "@/models/Pieces/Queen";
import { King } from "@/models/Pieces/King";
import { Pawn } from "@/models/Pieces/Pawn";
import { Piece } from "@/models/piece";
import { Empty } from "@/models/Pieces/Empty";


export function GetBaseBoard() {
    let board: Piece[][] = [[], [], [], [], [], [], [], []]

    board[0].push(new Rook("d"), new Knight("d"), new Bishop("d"), new Queen("d"), new King("d"), new Bishop("d"), new Knight("d"), new Rook("d"))
    for (let index = 0; index < 8; index++) {
        board[1].push(new Pawn("d"))
    }

    for (let row = 2; row < 6; row++) {

        for (let index = 0; index < 8; index++) {
            board[row].push(new Empty())

        }
    }
    for (let index = 0; index < 8; index++) {
        board[6].push(new Pawn("l"))

    }
    board[7].push(new Rook("l"), new Knight("l"), new Bishop("l"), new Queen("l"), new King("l"), new Bishop("l"), new Knight("l"), new Rook("l"))

    return board
}

export function GetBoardColor() {
    let board: string[][] = [[], [], [], [], [], [], [], []]
    for (let row = 0; row < 8; row++) {

        for (let col = 0; col < 8; col++) {
            if ((row + col) % 2 == 0) {
                board[row].push("#ffffff")

            }
            else {
                board[row].push("#292828")
            }

        }
    }

    return board
}