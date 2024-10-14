<script setup lang="ts">
import CreateToDo from './CreateToDo.vue';
import useTodos from './store/useTodos';
import {Status } from './types';
import { computed } from 'vue';
import Draggable from 'vuedraggable';
interface Props {
    status: Status;
}

const props = defineProps<Props>();
const{getTodosByStatus, deleteTodo, updateTodoStatus} = useTodos();
const todoList = getTodosByStatus(props.status);

const groupLabel = computed(() => ({
    [Status.Active]: "Active",
    [Status.Completed]: "Completed",
}));

const onDraggableChange = (payload: any) => {
    if (payload?.added?.element) {
        updateTodoStatus(payload?.added?.element, props.status);
    }
}
</script>
<template>
    <div class="group-wrapper">
        <h2>{{ groupLabel[props.status] }}</h2>
        <Draggable class="draggable" :list="todoList" group="todos" item-key="ID" @change="onDraggableChange">
            <template #item="{element: todo}">
                <li>
                    {{ todo.title }}
                    <span class="delete" @click="deleteTodo(todo)">x</span>
                </li>
            </template>
        </Draggable>
        <CreateToDo :status="props.status"/>
    </div>
</template>
<style>
.group-wrapper {
    flex: 2;
    padding: 20px;
    background-color: rgb(61, 79, 83);
    width: 300px;
}

.group-wrapper li {
    list-style: none;
    background-color: rgb(172, 180, 186);
    color: black;
    padding: 2px 5px;
    cursor: grab;
    margin: 5px 0;
}
.draggable {
    min-height: 200px;
}
.delete
{
    float: right;
    cursor: pointer;
}
</style>