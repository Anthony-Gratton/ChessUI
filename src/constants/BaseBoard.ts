import { Bishop } from "@/models/Pieces/Bishop";
import { Knight } from "@/models/Pieces/Knight";
import { Rook } from "@/models/Pieces/Rook";
import { Queen } from "@/models/Pieces/Queen";
import { King } from "@/models/Pieces/King";
import { Pawn } from "@/models/Pieces/Pawn";
import { Piece } from "@/models/piece";
import { Empty } from "@/models/Pieces/Empty";


export const BASE_BOARD: Piece[] = [new Rook("B"), new Knight("B"), new Bishop("B"), new Queen("B"), new King("B"), new Bishop("B"), new Knight("B"), new Rook("B"),
new Pawn("B"), new Pawn("B"), new Pawn("B"), new Pawn("B"), new Pawn("B"), new Pawn("B"), new Pawn("B"), new Pawn("B"),
new Empty("")]