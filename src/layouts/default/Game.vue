<template>
    <div class="center pt-15">
        <Board :board="currentBoard"></Board>
    </div>
</template>
  
<script lang="ts" setup>
import Board from '@/components/Board.vue';
import { ref } from 'vue';
import { board } from '@/models/board';

const pieced = {
    notation: "k",
    color: "d",
    name: "King",
    hasMoved: false,

}
const piecel = {
    notation: "k",
    color: "l",
    name: "King",
    hasMoved: false,

}
const currentBoard = ref<board>({
    id: 1,
    turn: 0,
    pieces: [],
})

for (let index = 0; index < 64; index++) {
    if (index % 2 == 0) {
        currentBoard.value.pieces.push(piecel)
    }
    else {
        currentBoard.value.pieces.push(pieced)

    }

}
// console.log(currentBoard.value)
</script>

<style scoped>
.center {
    margin: auto;
    width: 50%;
    padding: 10px;
}
</style>
  