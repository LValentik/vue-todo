import { computed, reactive } from "vue";
import { Status, type ToDo } from "../types";

interface ToDoStore {
    [Status.Active]: ToDo[];
    [Status.Completed]: ToDo[];
}

const defaultVal = {
    [Status.Active]: [{ id: 1, title: 'Learn Vue 3', status: Status.Active }],
    [Status.Completed]: [{ id: 2, title: 'Learn TypeScript', status: Status.Completed }],
}

const todoStore = reactive<ToDoStore>(defaultVal);

export default () => {
    const getTodosByStatus = (status: Status) => {
        return computed(() => todoStore[status]) ;
    };

    const updateTodoStatus = (todo: ToDo, newStatus: Status) => {
        todo.status = newStatus;
    }

    const addTodo = (todo: ToDo) => {
        todoStore[todo.status].push(todo);

    };
    const deleteTodo = (todoToDelete: ToDo) => {
        todoStore[todoToDelete.status] = todoStore[todoToDelete.status].filter(todo => todo.id !== todoToDelete.id);
    }

    return { getTodosByStatus, addTodo, deleteTodo, updateTodoStatus };
};