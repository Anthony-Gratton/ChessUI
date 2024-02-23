<template>
    <v-row v-for="row in 8" no-gutters>
        <div v-for="col in 8">
            <v-sheet :height="100" :width="100" :color="boardColor[row - 1][col - 1]" @click="OnPieceClick(row, col)">
                <v-img
                    v-if="currentBoard != undefined && currentBoard.pieces[row - 1][col - 1].notation != '' && currentBoard.pieces[row - 1][col - 1].notation != undefined"
                    :src="`/src/assets/chessPieces/${currentBoard.pieces[row - 1][col - 1].notation + currentBoard.pieces[row - 1][col - 1].color}.svg`"></v-img>
            </v-sheet>
        </div>
    </v-row>
</template>
  
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Board } from '../models/board'
import { Piece } from '../models/piece'
import { Empty } from '../models/Pieces/Empty'
import { GetBoardColor } from '@/constants/BaseBoard';


const props = defineProps(['board', 'boardColor'])
const currentBoard = ref<Board>(props.board)
const possibleMoves = ref<number[][]>()
const isPieceClicked = ref(0)
const boardColor = ref<string[][]>(props.boardColor)




function OnPieceClick(row: number, col: number) {
    let piece: Piece = getClickedPiece(row, col)
    if (piece instanceof Empty) {
    }
    else {
        possibleMoves.value = getPossibleMoves(row, col, piece)
        UpdateBoardColor(row, col)
    }
}


function getClickedPiece(row: number, col: number) {
    console.log(currentBoard.value.pieces[row - 1][col - 1])
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
                    possibleMoves.push([newRow, newCol])
                    calcRow = newRow
                    calcCol = newCol
                }
                else {
                    console.log("test")
                    inbound = false
                }
            }
        }
        return possibleMoves
    }
    else {

    }
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


</script>
