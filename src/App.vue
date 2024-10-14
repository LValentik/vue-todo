<script setup lang="ts">
import ToDoList from './components/ToDoList.vue';
</script>

<template>
  <div class="mainContainer">
    <ToDoList />
  </div>
</template>

<style scoped>
.mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;;
}

</style>
