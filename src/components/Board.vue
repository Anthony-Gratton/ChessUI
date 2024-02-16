<template>
    <v-row v-for="row in 8" no-gutters>
        <div v-for="col in 8">
            <v-sheet v-if="(row + col) % 2 == 0" :height="100" :width="100" color="white" @click="OnPieceClick(row, col)">
                <v-img
                    v-if="currentBoard != undefined && currentBoard.pieces[row - 1][col - 1].notation != '' && currentBoard.pieces[row - 1][col - 1].notation != undefined"
                    :src="`/src/assets/chessPieces/${currentBoard.pieces[row - 1][col - 1].notation + currentBoard.pieces[row - 1][col - 1].color}.svg`"></v-img>
            </v-sheet>
            <v-sheet v-else :height="100" :width="100" color="Black" @click="OnPieceClick(row, col)">
                <v-img
                    v-if="currentBoard != undefined && currentBoard.pieces[row - 1][col - 1].notation != '' && currentBoard.pieces[row - 1][col - 1].notation != undefined"
                    :src="`/src/assets/chessPieces/${currentBoard.pieces[row - 1][col - 1].notation + currentBoard.pieces[row - 1][col - 1].color}.svg`"></v-img>

            </v-sheet>
        </div>
    </v-row>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { Board } from '../models/board'
import { Piece } from '../models/piece'
import { Empty } from '../models/Pieces/Empty'
const props = defineProps(['board'])
const currentBoard = ref<Board>(props.board)
const possibleMoves = ref<number[][]>([])
console.log(currentBoard.value)




function OnPieceClick(row: number, col: number) {
    let piece: Piece = getClickedPiece(row, col)
    if (piece instanceof Empty) {
    }
    else {
        getPossibleMoves(row, col, piece)

    }
}


function getClickedPiece(row: number, col: number) {
    console.log(currentBoard.value.pieces[row - 1][col - 1])
    return currentBoard.value.pieces[row - 1][col - 1]
}

function getPossibleMoves(row: number, col: number, piece: Piece) {
    let possibleMoves: number[][] = []
    if (piece.hasUnlimitedRange == true) {
        for (let i = 0; i <= piece.moves.length; i++) {

            //TOFIX
            let newRow = row + piece.moves[i][0]
            let newCol = col + piece.moves[i][1]
            if (newRow >= 1 && newRow <= 8 && newCol >= 1 && newCol <= 8) {
                possibleMoves.push([newRow, newCol])
            }
        }
        console.log(possibleMoves)
    }
    else {

    }
}

</script>
