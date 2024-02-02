<template>
    <v-row v-for="row in 8" no-gutters>
        <div v-for="col in 8">
            <v-sheet v-if="(row + col) % 2 == 0" :height="100" :width="100" color="white">
                <v-img
                    v-if="currentBoard != undefined && currentBoard.pieces[((row - 1) * 7) + col - 1].notation != 'e' && currentBoard.pieces[((row - 1) * 7) + col - 1].notation != undefined"
                    :src="`/src/assets/chessPieces/${currentBoard.pieces[((row - 1) * 7) + col - 1].notation + currentBoard.pieces[((row - 1) * 7) + col - 1].color}.svg`"></v-img>
            </v-sheet>
            <v-sheet v-else :height="100" :width="100" color="Black">
                <v-img
                    v-if="currentBoard != undefined && currentBoard.pieces[((row - 1) * 7) + col - 1].notation != 'e' && currentBoard.pieces[((row - 1) * 7) + col - 1].notation != undefined"
                    :src="`/src/assets/chessPieces/${currentBoard.pieces[((row - 1) * 7) + col - 1].notation + currentBoard.pieces[((row - 1) * 7) + col - 1].color}.svg`"></v-img>

            </v-sheet>
        </div>
    </v-row>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { board } from '../models/board'
import { piece } from '../models/piece'
const props = defineProps(['board'])
const currentBoard = ref<board>(props.board)
console.log(currentBoard.value)
</script>
  