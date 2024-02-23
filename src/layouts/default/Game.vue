<template>
    <div class="center pt-15">
        <VBoard :board="currentBoard" :boardColor="boardColor"></VBoard>
    </div>
</template>
  
<script lang="ts" setup>
import VBoard from '@/components/Board.vue';
import { ref } from 'vue';
import { Board } from '@/models/Board';
import { GetBaseBoard } from '@/constants/BaseBoard';
import { GetBoardColor } from '@/constants/BaseBoard';

const currentBoard = ref<Board>()
const boardColor = ref<string[][]>()
currentBoard.value = new Board(0, 0, GetBaseBoard())
boardColor.value = GetBoardColor()

// console.log(currentBoard.value)
</script>

<style scoped>
.center {
    margin: auto;
    width: 50%;
    padding: 10px;
}
</style>
  @/models/Board