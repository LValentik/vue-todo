<script setup lang="ts">
import { ref } from 'vue';
import { reactive } from 'vue';
import { Status, type ToDo} from './types';
import useTodos from './store/useTodos';
interface Props {
    status: Status;
}
const props = defineProps<Props>();

const shouldDisplay = ref(false);

const { addTodo } = useTodos();

const newTodo = reactive <Omit<ToDo, "id">>({
    title: '',
    status: Status.Active,
})
const resetForm = () => {
    shouldDisplay.value = false;
    newTodo.title = '';
}
const handleOnSubmit = () => {
    addTodo({
    id: Math.random() * 100000000000000,   
    ...newTodo,  
    }
    );
    resetForm();
}
</script>
<template>
     <h3
      v-if="!shouldDisplay"
      @click="shouldDisplay = !shouldDisplay">
      Add New
    </h3>
    <template v-else>
        <form @submit.prevent="handleOnSubmit">
            
            
            <div>
                <input type="text" placeholder="title" v-model="newTodo.title"/>
            </div>


            <button type="submit">Add</button>
            <button type="button" @click="resetForm">cancel</button>
                
        
        </form>
    </template>
    
</template>