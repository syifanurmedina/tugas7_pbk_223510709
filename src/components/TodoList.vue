<template>
  <div>
    <h1>Todo List</h1>
    <h4>by Syifa Nur Medina</h4>
    <input v-model="newTodo" placeholder="Tambahkan kegiatan" @keyup.enter="addTodo" />
    <button @click="addTodo">Add</button>
    
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" :checked="todo.completed" @change="toggleCompletion(index)" />
        <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
          {{ todo.text }}
        </span>
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ul>

    <p>{{ incompleteTodosCount }} tasks remaining</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';

export default {
  setup() {
    const newTodo = ref('');
    const todoStore = useTodoStore();

    const addTodo = () => {
      if (newTodo.value.trim()) {
        todoStore.addTodo(newTodo.value.trim());
        newTodo.value = '';
      }
    };

    const removeTodo = (index) => {
      todoStore.removeTodo(index);
    };

    const toggleCompletion = (index) => {
      todoStore.toggleTodoCompletion(index);
    };

    return {
      newTodo,
      addTodo,
      removeTodo,
      toggleCompletion,
      todos: todoStore.todos,
      incompleteTodosCount: todoStore.incompleteTodosCount
    };
  }
};
</script>

<style scoped>
h1 {
  color: #5f1111;
}

input {
  margin: 5px;
  padding: 5px;
}

button {
  margin: 5px;
  padding: 5px 10px;
  background-color: #86395f;
  border: none;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #a75f85;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  background-color: #ffe4e1;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  margin-right: 10px;
}
</style>
