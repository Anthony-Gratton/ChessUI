<template>
    <div class="chessboard-container">
        <v-row class="chessboard" no-gutters>
            <div v-for="row in 8" class="chess-row">
                <div v-for="col in 8" class="chess-square">
                    <v-sheet :height="100" :width="100" :color="boardColor[row - 1][col - 1]"
                        @click="OnPieceClick(row, col)">
                        <v-img
                            v-if="currentBoard != undefined && currentBoard.pieces[row - 1][col - 1].notation != '' && currentBoard.pieces[row - 1][col - 1].notation != undefined"
                            :src="`/src/assets/chessPieces/${currentBoard.pieces[row - 1][col - 1].notation + currentBoard.pieces[row - 1][col - 1].color}.svg`"></v-img>
                    </v-sheet>
                </div>
            </div>
        </v-row>
    </div>
</template>
  
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Board } from '../models/board'
import { Piece } from '../models/piece'
import { Empty } from '../models/Pieces/Empty'
import { GetBoardColor } from '@/constants/BaseBoard';
import { Pawn } from '@/models/Pieces/Pawn';


const props = defineProps(['board', 'boardColor'])
const currentBoard = ref<Board>(props.board)
const possibleMoves = ref<number[][]>()
const isPieceSelected = ref(false)
const lastSelection = ref<number[]>()
const lastClickedPiece = ref<Piece>()
const boardColor = ref<string[][]>(props.boardColor)




function OnPieceClick(row: number, col: number) {
    let piece: Piece = getClickedPiece(row, col)
    let colorDirection
    if (isPieceSelected.value == true && CheckIfClickIsMovable(row, col)) {
        if (lastSelection.value) {
            currentBoard.value.pieces[row - 1][col - 1] = currentBoard.value.pieces[lastSelection.value[0]][lastSelection.value[1]]
            currentBoard.value.pieces[lastSelection.value[0]][lastSelection.value[1]] = new Empty()
            currentBoard.value.pieces[row - 1][col - 1].hasMoved = true
            if (currentBoard.value.pieces[row - 1][col - 1] instanceof Pawn) {
                if (Math.abs((lastSelection.value[0] + 1) - row) == 2) {
                    currentBoard.value.pieces[row - 1][col - 1].enPassantEnabled = true
                }
                currentBoard.value.pieces[row - 1][col - 1].hasMovedAt = currentBoard.value.turn

                if (currentBoard.value.pieces[row - 1][col - 1].color == "l") {
                    colorDirection = 1
                }
                else {
                    colorDirection = -1
                }
                if (currentBoard.value.pieces[row - 1 + colorDirection][col - 1] instanceof Pawn) {
                    if (currentBoard.value.pieces[row - 1 + colorDirection][col - 1].hasMovedAt == currentBoard.value.turn - 1) {
                        if (currentBoard.value.pieces[row - 1 + colorDirection][col - 1].color != currentBoard.value.pieces[row - 1][col - 1].color) {
                            currentBoard.value.pieces[row - 1 + colorDirection][col - 1] = new Empty()

                        }
                    }
                }
            }

            currentBoard.value.NextTurn()
            isPieceSelected.value = false
            possibleMoves.value = undefined
            boardColor.value = GetBoardColor()
        }
    }
    else {
        if (piece instanceof Empty) {
            boardColor.value = GetBoardColor()
            isPieceSelected.value = false
        }
        else {
            possibleMoves.value = getPossibleMoves(row, col, piece)
            isPieceSelected.value = true
            UpdateBoardColor(row, col)
            lastSelection.value = [row - 1, col - 1]
        }
    }
    lastClickedPiece.value = piece
}


function getClickedPiece(row: number, col: number) {
    return currentBoard.value.pieces[row - 1][col - 1]
}

function getPossibleMoves(row: number, col: number, piece: Piece) {
    let possibleMoves: number[][] = []
    let baseRow = row
    let baseCol = col
    if (piece.hasUnlimitedRange == true) {
        for (let i = 0; i < piece.moves.length; i++) {
            let calcRow = baseRow
            let calcCol = baseCol
            let inbound = true
            let move = piece.moves[i]

            while (inbound) {
                let newRow = calcRow + move[0]
                let newCol = calcCol + move[1]
                if (newRow >= 1 && newRow <= 8 && newCol >= 1 && newCol <= 8) {
                    if (currentBoard.value.pieces[newRow - 1][newCol - 1].color != piece.color) {
                        possibleMoves.push([newRow, newCol])
                    }
                    if (currentBoard.value.pieces[newRow - 1][newCol - 1] instanceof Empty) {
                    }
                    else {
                        inbound = false
                    }
                    calcRow = newRow
                    calcCol = newCol
                }
                else {
                    inbound = false
                }
            }
        }

        return possibleMoves
    }
    else {
        for (let i = 0; i < piece.moves.length; i++) {
            let calcRow = baseRow
            let calcCol = baseCol
            let move = piece.moves[i]


            let newRow = calcRow + move[0]
            let newCol = calcCol + move[1]
            if (newRow >= 1 && newRow <= 8 && newCol >= 1 && newCol <= 8) {

                if (currentBoard.value.pieces[newRow - 1][newCol - 1].color != piece.color) {
                    if (piece instanceof Pawn) {
                        if (currentBoard.value.pieces[newRow - 1][newCol - 1] instanceof Empty) {
                            possibleMoves.push([newRow, newCol])
                            if (piece.hasMoved == false) {
                                possibleMoves.push([newRow + move[0], newCol + move[1]])
                            }
                        }
                    }
                    else {
                        possibleMoves.push([newRow, newCol])
                    }
                }
                calcRow = newRow
                calcCol = newCol
            }
        }
        if (piece instanceof Pawn) {

            for (let i = 0; i < piece.takeMoves.length; i++) {
                let calcRow = baseRow
                let calcCol = baseCol
                let move = piece.takeMoves[i]
                let newRow = calcRow + move[0]
                let newCol = calcCol + move[1]
                if (newRow >= 1 && newRow <= 8 && newCol >= 1 && newCol <= 8) {
                    if (currentBoard.value.pieces[newRow - 1][newCol - 1].color != piece.color && !(currentBoard.value.pieces[newRow - 1][newCol - 1] instanceof Empty)) {
                        possibleMoves.push([newRow, newCol])
                    }
                    else if (currentBoard.value.pieces[newRow - 1][newCol - 1] instanceof Empty) {
                        if (currentBoard.value.pieces[baseRow - 1][baseCol - 1 + move[1]] instanceof Pawn) {
                            if (currentBoard.value.pieces[baseRow - 1][baseCol - 1 + move[1]].hasMovedAt == currentBoard.value.turn - 1) {
                                if (currentBoard.value.pieces[baseRow - 1][baseCol - 1 + move[1]].color != piece.color) {
                                    possibleMoves.push([newRow, newCol])

                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return possibleMoves
}


function UpdateBoardColor(row: number, col: number) {
    boardColor.value = GetBoardColor()
    if ((row + col) % 2 == 0) {
        boardColor.value[row - 1][col - 1] = "#ccddff"
    }
    else {
        boardColor.value[row - 1][col - 1] = "#6699ff"
    }
    if (possibleMoves.value) {
        possibleMoves.value.forEach(move => {
            if ((move[0] + move[1]) % 2 == 0) {
                boardColor.value[move[0] - 1][move[1] - 1] = "#ccddff"
            }
            else {
                boardColor.value[move[0] - 1][move[1] - 1] = "#6699ff"

            }
        })


    }

}


function CheckIfClickIsMovable(row: number, col: number) {
    if (possibleMoves.value) {
        for (let i = 0; i < possibleMoves.value.length; i++) {
            if (possibleMoves.value[i][0] == row && possibleMoves.value[i][1] == col) {
                return true
            }
        }
    }
    return false
}


</script>
<style scoped>
.chessboard {
    width: 100%;
    /* Ensure chessboard spans the width of its container */
}

.chess-row {
    display: flex;
    /* Display rows as flex containers */
}

.chess-square {
    flex: 1;
    /* Each square takes up equal space */
    /* Maintain square aspect ratio */
    position: relative;
}

.chessboard-container {
    margin: 0 auto;
    /* This will center the container horizontally */
}
</style>