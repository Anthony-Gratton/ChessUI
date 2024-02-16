<template>
    <div class="center pt-15">
        <VBoard :board="currentBoard"></VBoard>
    </div>
</template>
  
<script lang="ts" setup>
import VBoard from '@/components/Board.vue';
import { ref } from 'vue';
import { Board } from '@/models/Board';
import { GetBaseBoard } from '@/constants/BaseBoard';

const currentBoard = ref<Board>()
currentBoard.value = new Board(0, 0, GetBaseBoard())

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