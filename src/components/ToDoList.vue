<script setup lang="ts">
    import ToDoGroup from './ToDoGroup.vue';
    import { Status } from './types';
</script>
<template>
  <div class="list">
    <ToDoGroup :status = "Status.Active" class="listGroup"/>
    <ToDoGroup :status = "Status.Completed" class="listGroup"/>
  </div>
</template>
<style>
.list {
    display: flex;
    justify-content: space-around;
    gap: 20px;
}

</style>